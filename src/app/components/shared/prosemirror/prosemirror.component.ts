import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { EditorState, Plugin, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { DOMParser, DOMSerializer, Schema } from 'prosemirror-model';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { redo, undo } from 'prosemirror-history';
import { MenuItem, MenuElement } from 'prosemirror-menu';
import { schema as basicSchema } from 'prosemirror-schema-basic';
import { addListNodes, liftListItem, sinkListItem, splitListItem, wrapInList } from 'prosemirror-schema-list';
import { buildMenuItems, exampleSetup } from "prosemirror-example-setup";
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

  @Input() doc!: string | undefined;
  @Input() plugins!: Plugin | undefined;
  @Input() readOnly: boolean = false;
  @Input() height: number = 200;

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
  proseMirrorTransaction!: Transaction;
  proseMirrorTransactions!: Array<Transaction>;
  proseMirrorDefaultPlugins!: Array<Plugin>;
  proseMirrorMenuItemsPlugin!: Array<Array<MenuElement>>;
  proseMirrorListKeymapPlugin!: Plugin;
  proseMirrorNgClass: any = { 'display': (!this.readOnly && this.componentState === 'loaded') ? null : 'none' };

  docTextReplacement!: Array<DocTextReplacement>;
  docTextNewLine: string = '\n';
  docTextSpace: string = ' '; // \s is not working

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
      nodes: addListNodes(basicSchema.spec.nodes, "paragraph block*", "block"),
      marks: basicSchema.spec.marks
    });

    this.proseMirrorNgClass = {
		'display':
      (!this.readOnly && this.componentState === 'loaded') ? null : 'none'
    };
    //this.changeDetectRef.detectChanges();
  }

  /** Can return the value rightaway,
   * or get the plugins from this.proseMirrorPlugin global variable
   */
  private createPlugins(plugins?: any): Array<Plugin> {
    this.proseMirrorMenuItemsPlugin = buildMenuItems(this.proseMirrorSchema).fullMenu;

    this.proseMirrorMenuItemsPlugin[1].push(
      new MenuItem({
        title: "Bullet list",
        label: "Bullet list",
        enable: state => wrapInList(this.proseMirrorSchema?.nodes['bullet_list'])(state),
        run: (state, dispatch) => wrapInList(this.proseMirrorSchema?.nodes['bullet_list'])(state, dispatch),
      }),
      new MenuItem({
        title: "Ordered list",
        label: "Ordered list",
        enable: state => wrapInList(this.proseMirrorSchema?.nodes['ordered_list'])(state),
        run: (state, dispatch) => wrapInList(this.proseMirrorSchema?.nodes['ordered_list'])(state, dispatch),
      })
    );

    this.proseMirrorDefaultPlugins = [
      ...exampleSetup({
        schema: this.proseMirrorSchema,
        //menuBar: true,
        history: true,
        floatingMenu: true,
        //menuContent: this.proseMirrorMenuItemsPlugin,
      }), // Adds keymaps, history, and base features
      keymap(baseKeymap), // Additional key bindings
      //history(), // History plugin for undo/redo
      //menuBar({ content: this.proseMirrorMenuItemsPlugin }),
    ];

    this.proseMirrorListKeymapPlugin = keymap({
      "Mod-Shift-8": wrapInList(this.proseMirrorSchema?.nodes['bullet_list']),   // Bullet List (Ctrl+Shift+8)
      "Mod-Shift-9": wrapInList(this.proseMirrorSchema?.nodes['ordered_list']),  // Ordered List (Ctrl+Shift+9)
      "Enter": splitListItem(this.proseMirrorSchema?.nodes['list_item']),        // Split list item
      "Tab": sinkListItem(this.proseMirrorSchema?.nodes['list_item']),           // Indent list item
      "Shift-Tab": liftListItem(this.proseMirrorSchema?.nodes['list_item']),     // Outdent list item
      "Mod-z": undo,
      "Mod-y": redo,
    });

    this.proseMirrorPlugins = this.updatePlugins(plugins);

    return this.proseMirrorPlugins;
  }

  /** Can return the value rightaway,
   * or get the plugins from this.proseMirrorPlugin global variable
   */
  private updatePlugins(plugins?: any): Array<Plugin> {
    // Default plugins settings is from exampleSetup function from ProseMirror example setup library
    let normalizePlugins: any = plugins || [];

    // Set intial default plugins (make all array)
    this.proseMirrorPlugins = (typeof normalizePlugins === 'object')
      ? [normalizePlugins]
      : normalizePlugins;

    // Add specifict plugins to default plugins
    this.proseMirrorPlugins = normalizePlugins.concat([
      ...this.proseMirrorDefaultPlugins,
      this.proseMirrorListKeymapPlugin
    ]);

    return this.proseMirrorPlugins;
  }

  /** Can return the value rightaway,
   * or get the state from this.proseMirrorState global variable
   */
  private createState(doc: string | Text | undefined, plugins: Array<Plugin>): EditorState {
    try {
      const defaultContent: string = (this.doc) ? this.doc + ' ' : '';

      /**
       * Removed `doc` property value assign in EditorState
       *  this.elementRef.nativeElement.querySelector('#proseMirrorContent') // Unused
       * or
       *  DOMParser.fromSchema(this.proseMirrorSchema).parse(this.proseMirrorContent.nativeElement) // Unused
       * or
       *  defaultMarkdownParser.parse(doc?.toString() || defaultContent, this.proseMirrorSchema)
       */
      this.proseMirrorState = EditorState.create({
        schema: this.proseMirrorSchema,
        doc: DOMParser.fromSchema(this.proseMirrorSchema).parse(this.proseMirrorContent.nativeElement), // Assign doc to prosemirror content
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
  private updateState(transaction?: Transaction): EditorState {
    try {
      const defaultTransaction: Transaction = this.proseMirrorView.state.tr;
      const newState: EditorState = this.proseMirrorView.state?.apply(transaction || defaultTransaction);

      this.proseMirrorView.updateState(newState);
      this.proseMirrorState = this.proseMirrorView.state;

      // Comment below code to prevent double event emmiter
      // this.onChange(this.doc);
    } catch (error) {
      console.error(error);
      this.componentState = 'error';
    }

    return this.proseMirrorState;
  }

  private initiateProseMirror() {

    this.proseMirrorPlugins = this.createPlugins(this.plugins);

    //this.proseMirrorState = this.createState(this.doc, this.proseMirrorPlugins);
    this.proseMirrorState = this.createState(this.doc, this.proseMirrorPlugins);

    this.proseMirrorView = new EditorView(this.proseMirrorEditor.nativeElement, {
      state: this.proseMirrorState,
      dispatchTransaction: (this.readOnly)
        ? undefined
        : (transaction: Transaction) => this.onChange(transaction)
    });
    //let initialProseMirrorTransaction = this.proseMirrorView.state.tr.replaceWith(
    //  0,
    //  this.proseMirrorView.state.doc.content?.size,
    //  schema.nodeFromJSON(JSON.parse(this.doc || ''))
    //);
    //this.proseMirrorView.dispatch(initialProseMirrorTransaction);

    this.componentState = 'loaded';

    this.proseMirrorWrapperElement = this.elementRef.nativeElement.querySelector(this.proseMirrorWrapperClass);
    this.renderer.setStyle(this.proseMirrorWrapperElement, 'height', `${this.height}px`);

    this.changeDetectRef.detectChanges();
  }

  ngAfterViewInit(): void {
    this.initiateProseMirror();
    this.loaded.next(true);
    this.changeDetectRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['doc']) {
      this.doc = changes['doc'].currentValue;
    }

    if (changes['plugins']) {
      this.plugins = changes['plugins'].currentValue;

      this.proseMirrorPlugins = this.updatePlugins(this.plugins);
    }

    // Update editor view when it`s been created
    if (this.proseMirrorView !== undefined) {
      this.loaded.next(false);

      this.updateState();

      this.loaded.next(true);
    }

    this.changeDetectRef.detectChanges();
  }

  private serializeContentToHTMLString(state: EditorState): string | null {
    let results: string | null = null;

    try {
      /**
       * 1. Capture changes here.
       * Default structure of `doc` content is HTML native element.
       * But there is a another way to use structure in doc content -> Markdown [https://commonmark.org]
       * defaultMarkdownSerializer.serialize(state.doc);
       */
      let resultSerialize = DOMSerializer
        .fromSchema(state.schema)
        //.serializeNode(state.doc)
        .serializeFragment(state.doc.content);

      // 2. Create a temporary container to hold the serialized HTML
      const container: any = document.createElement('div');
      container.appendChild(resultSerialize);

      // 3. Convert the DOM fragment to an HTML string
      results = container.innerHTML;
    } catch (error) {
      results = null;
      console.error(error);
      //this.componentState = 'error';
    }

    return results;
  }

  public onChange(data: any): void {
    let results = data;

    if (data instanceof Transaction) {
      let newState: EditorState = this.updateState(data);

      // Serialize new content
      results = this.serializeContentToHTMLString(newState);

      // Display the HTML string (for example, inside the output element)
      this.doc = results;
      this.proseMirrorContent.nativeElement.innerHTML = results;

      //console.log('doc content', DOMParser.fromSchema(newState.schema).parse(results));
      console.log('doc content results', results);
    }

    this.changes.next(results);
    this.changeDetectRef.detectChanges();
  }

}
