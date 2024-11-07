import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { basicSetup, minimalSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorState, Extension, Text } from '@codemirror/state';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';

export interface DocTextReplacement {
  from: string;
  to: string;
}

@Component({
  selector: 'app-codemirror',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './codemirror.component.html',
  styleUrl: './codemirror.component.scss'
})
export class CodemirrorComponent implements AfterViewInit, OnChanges {

  /**
   * This codemirror implementation component has a minor to refactor code in the editor so the view is readable.
   * Maybe next fix will be implement other refactor feature like Prittier.
   */

  componentState: 'loading' | 'loaded' | 'error' = 'loading';

  @ViewChild('codeMirror') codeMirror: any;

  codeMirrorElement!: Element;
  codeMirrorUpdateExtension!: Extension;
  codeMirrorReadOnlyExtension!: Extension;
  codeMirrorExtensions!: any; // To make it can be editable, this type is must be (any)
  codeMirrorState!: EditorState;
  codeMirrorView!: EditorView;

  docTextReplacement!: Array<DocTextReplacement>;
  docTextNewLine: string = '\n';
  docTextSpace: string = ' '; // \s is not working

  @Input() doc!: string | Text | undefined;
  @Input() extensions: Extension | undefined = [basicSetup, javascript(), oneDark];
  @Input() readOnly: boolean = false;

  @Output() loaded: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  @Output() changes: EventEmitter<any> = new EventEmitter<any>(true);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private changeDetectRef: ChangeDetectorRef
  ) {
    // Set intial default extensions (make all array)
    this.codeMirrorExtensions = this.createExtensions(this.extensions);

    this.docTextReplacement = [
      { from: '{', to: '{' + this.docTextNewLine },
      { from: '}', to: '}' + this.docTextNewLine },
      { from: ',', to: ',' + this.docTextNewLine },
      { from: ';', to: ';' + this.docTextNewLine },
      { from: ':', to: ':' + this.docTextSpace },
    ]

    //this.codeMirrorState!: EditorState;
  }

  /** Can return the value rightaway,
   * or get the extensions from this.codeMirrorExtensions global variable
   */
  private createExtensions(extensions?: any): Extension {
    /**
     * Set initial for specifict extensions
     *  1. updateListener for detect changes
     *  2. EditorState.readOnly to set editor editable or not
     */
    this.codeMirrorUpdateExtension = EditorView.updateListener.of(
      (viewUpdate: ViewUpdate) => {
        if (viewUpdate.docChanged) {
          this.onChange(viewUpdate)
        }
      }
    );
    this.codeMirrorReadOnlyExtension = EditorView.editable.of(this.readOnly); // EditorState.readOnly.of(this.readOnly);

    this.codeMirrorExtensions = this.updateExtensions(extensions);

    return this.codeMirrorExtensions;
  }

  /** Can return the value rightaway,
   * or get the extensions from this.codeMirrorExtensions global variable
   */
  private updateExtensions(extensions?: any): Extension {
    // Default plugins settings is [basicSetup, javascript(), oneDark]
    let normalizeExtensions: any = extensions || this.codeMirrorExtensions;

    // Set intial default extensions (make all array)
    this.codeMirrorExtensions =
      (typeof normalizeExtensions === 'object')
        ? [normalizeExtensions]
        : normalizeExtensions;

    // Add specifict extensions to default extensions
    this.codeMirrorExtensions = normalizeExtensions.concat([
      this.codeMirrorUpdateExtension,
      this.codeMirrorReadOnlyExtension
    ]);

    return this.codeMirrorExtensions;
  }

  /** Can return the value rightaway,
   * or get the state from this.codeMirrorState global variable
   */
  private createState(doc?: string | Text | undefined, extensions?: Extension | undefined): EditorState {
    try {

      this.codeMirrorState = EditorState.create({
        doc: doc || this.doc,
        extensions: extensions || this.codeMirrorExtensions,
      });

      this.componentState = 'loaded';
    } catch (e) {
      //Please make sure install codemirror@6.0.1
      //If your command was npm install codemirror, will installed 6.65.1(whatever)
      //You will be here.
      console.error(e);
      this.componentState = 'error';
    }

    return this.codeMirrorState;
  }

  /** Can return the value rightaway,
   * or get the state from this.codeMirrorState global variable
   */
  private updateState(doc?: string | Text | undefined, extensions?: Extension | undefined): EditorState {
    try {

      this.codeMirrorView.setState(
        EditorState.create({
          doc: doc || this.doc,
          extensions: extensions || this.codeMirrorExtensions,
        })
      );

      this.onChange(this.doc);
    } catch (error) {
      console.error(error);
      this.componentState = 'error';
    }

    return this.codeMirrorState;
  }

  private replaceDocTextToLineEnter(dataSource: string | Text | undefined, docTextReplacement: Array<DocTextReplacement> = this.docTextReplacement): string | Text | undefined {
    let results = dataSource || '';

    if (dataSource) {
      docTextReplacement.forEach((replacement: any, index: number) => {
        results = results.toString().replace(replacement.from, replacement.to).toString();
      });

      this.doc = results;
    }

    return this.doc;
  }

  ngAfterViewInit(): void {
    /**
     * This is variable that can be assign just in AfterViewInit hook because nativeElement
     */
    this.codeMirrorElement = this.codeMirror.nativeElement;

    this.doc = this.replaceDocTextToLineEnter(this.doc)

    this.createState(this.doc, this.codeMirrorExtensions);

    this.codeMirrorView = new EditorView({
      state: this.codeMirrorState,
      parent: this.codeMirrorElement,
    });

    this.loaded.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['doc']) {
      this.doc = changes['doc'].currentValue;
    }

    if (changes['extensions']) {
      this.extensions = changes['extensions'].currentValue;

      this.codeMirrorExtensions = this.updateExtensions(this.extensions);
    }

    // Update editor view when it`s been created
    if (this.codeMirrorView !== undefined) {
      this.loaded.next(false);

      this.updateState(this.doc, this.codeMirrorExtensions);

      this.loaded.next(true);
    }

  }

  public onChange(data: any): void {
    let results = data;

    if (data instanceof ViewUpdate) {
      results = data.state.doc.toString();
    }

    this.changes.next(results);
    this.changeDetectRef.detectChanges();
  }

}
