import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { EditorState, Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema, DOMParser } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { exampleSetup } from "prosemirror-example-setup";
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

export interface DocTextReplacement {
  from: string;
  to: string;
}

@Component({
  selector: 'app-prosemirror',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './prosemirror.component.html',
  styleUrl: './prosemirror.component.scss'
})
export class ProsemirrorComponent implements AfterViewInit, OnChanges {

  componentState: 'loading' | 'loaded' | 'error' = 'loading';

  @ViewChild('proseMirrorEditor') proseMirrorEditor: any;
  @ViewChild('proseMirrorContent') proseMirrorContent: any;
  //@ViewChild('.ProseMirror-menubar-wrapper') proseMirrorWrapper: any;

  proseMirrorSchema!: Schema;
  proseMirrorPlugins!: Array<Plugin<any>>;
  proseMirrorState!: EditorState;
  proseMirrorView!: EditorView;
  proseMirrorWrapperClass: string = '.ProseMirror-menubar-wrapper';
  proseMirrorWrapperElement!: ElementRef;

  docTextReplacement!: Array<DocTextReplacement>;
  docTextNewLine: string = '\n';
  docTextSpace: string = ' '; // \s is not working

  @Input() doc!: string | undefined;
  @Input() plugins!: Plugin | undefined; // = [basicSetup, javascript(), oneDark];
  @Input() readOnly: boolean = false;
  @Input() height: number = 200;

  @Output() loaded: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  @Output() changes: EventEmitter<any> = new EventEmitter<any>(true);

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private changeDetectRef: ChangeDetectorRef
  ) {
    // Mix the nodes from prosemirror-schema-list into the basic schema to
    // create a schema with list support.
    this.proseMirrorSchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks
    });
  }

  /** Can return the value rightaway,
   * or get the plugins from this.proseMirrorPlugin global variable
   */
  private createPlugins(plugins?: any): Array<Plugin<any>> {
    /**
     * Set initial for specifict plugins
     *  1. updateListener for detect changes
     *  2. EditorState.readOnly to set editor editable or not
     */
    //this.proseMirrorUpdatePlugin = EditorView.updateListener.of(
    //  (viewUpdate: ViewUpdate) => {
    //    if (viewUpdate.docChanged) {
    //      this.onChange(viewUpdate)
    //    }
    //  }
    //);
    //this.proseMirrorReadOnlyPlugin = EditorView.editable.of(this.readOnly); // EditorState.readOnly.of(this.readOnly);

    this.proseMirrorPlugins = this.updatePlugins(plugins);

    return this.proseMirrorPlugins;
  }

  /** Can return the value rightaway,
   * or get the plugins from this.proseMirrorPlugin global variable
   */
  private updatePlugins(plugins?: any): Array<Plugin<any>> {
    // Default plugins settings is from exampleSetup function from ProseMirror example setup library
    let normalizePlugins: any = plugins || exampleSetup({ schema: this.proseMirrorSchema });

    // Set intial default plugins (make all array)
    this.proseMirrorPlugins =
      (typeof normalizePlugins === 'object')
        ? [normalizePlugins]
        : normalizePlugins;

    // Add specifict plugins to default plugins
    //this.proseMirrorPlugins = normalizePlugins.concat([
    //  this.proseMirrorUpdatePlugin,
    //  this.proseMirrorReadOnlyPlugin
    //]);

    return this.proseMirrorPlugins;
  }

  /** Can return the value rightaway,
   * or get the state from this.proseMirrorState global variable
   */
  private createState(doc?: string | Text | undefined, plugins?: Array<Plugin<any>>): EditorState {
    try {

      this.proseMirrorState = EditorState.create({
        doc: DOMParser.fromSchema(this.proseMirrorSchema).parse(this.proseMirrorContent.nativeElement), // this.elementRef.nativeElement.querySelector('#proseMirrorContent')
        plugins: plugins || this.proseMirrorPlugins
      });

      this.componentState = 'loaded';
    } catch (e) {
      //Please make sure install prosemirror@6.0.1
      //If your command was npm install prosemirror, will installed 6.65.1(whatever)
      //You will be here.
      console.error(e);
      this.componentState = 'error';
    }

    return this.proseMirrorState;
  }

  /** Can return the value rightaway,
   * or get the state from this.proseMirrorState global variable
   */
  private updateState(doc?: string | Text | undefined, plugins?: Array<Plugin<any>>): EditorState {
    try {

      this.proseMirrorView.updateState(
        EditorState.create({
          doc: DOMParser.fromSchema(this.proseMirrorSchema).parse(this.proseMirrorContent.nativeElement), // this.elementRef.nativeElement.querySelector('#proseMirrorContent')
          plugins: plugins || this.proseMirrorPlugins,
        })
      );

      this.onChange(this.doc);
    } catch (error) {
      console.error(error);
      this.componentState = 'error';
    }

    return this.proseMirrorState;
  }

  ngAfterViewInit(): void {

    this.proseMirrorPlugins = exampleSetup({ schema: this.proseMirrorSchema }); // this.createPlugins(this.plugins);

    //this.proseMirrorState = this.createState(this.doc, this.proseMirrorPlugins);
    this.proseMirrorState = EditorState.create({
      doc: DOMParser.fromSchema(this.proseMirrorSchema).parse(this.proseMirrorContent.nativeElement), // this.elementRef.nativeElement.querySelector('#proseMirrorContent')
      plugins: this.proseMirrorPlugins
    });

    this.proseMirrorView = new EditorView(this.proseMirrorEditor.nativeElement, {
      state: this.proseMirrorState,
    });

    this.componentState = 'loaded';

    this.proseMirrorWrapperElement = this.elementRef.nativeElement.querySelector(this.proseMirrorWrapperClass);
    this.renderer.setStyle(this.proseMirrorWrapperElement, 'height', `${this.height}px`);

    this.changeDetectRef.detectChanges();

    this.loaded.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['doc']) {
      this.doc = changes['doc'].currentValue;
    }

    if (changes['plugins']) {
      this.plugins = changes['plugins'].currentValue;

      this.proseMirrorPlugins = this.updatePlugins(this.plugins);
    }
    console.log(changes);
    // Update editor view when it`s been created
    if (this.proseMirrorView !== undefined) {
      this.loaded.next(false);

      this.updateState(this.doc, this.proseMirrorPlugins);

      this.loaded.next(true);
    }

  }

  public onChange(data: any): void {
    let results = data;

    //if (data instanceof ViewUpdate) {
    //  results = data.state.doc.toString();
    //}

    this.changes.next(results);
  }

}
