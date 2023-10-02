import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { AppGeneralService, ResponseFormat } from 'src/app/services/app-general.service';
import { AppService, AppServiceType } from 'src/app/services/app.service';
import { DFField } from '../dynamic-forms';

interface DialogData {
  field: DFField | null,
  backendService: string;
  appearance: MatFormFieldAppearance;
  color: ThemePalette;
  title: string;
  messages: string;
  backButtonText: string;
}

@Component({
  selector: 'df-dialog-file-upload-prompt',
  template: `
    <!-- Dialog title -->
    <h1 mat-dialog-title class="text-center" [innerHTML]="dialogData.title"></h1>

    <!-- Dialog content -->
    <mat-dialog-content class="text-center">
      <p [innerHTML]="dialogData.messages"></p>

      <mat-form-field [appearance]="dialogData.appearance" [color]="dialogData.color">
        <!-- File inputs/chooser: files input/chooser dialog -->
        <input type="file" (change)="onSelected(fileInput.files)" #fileInput id="file-0" hidden />

        <!-- File names -->
        <input type="text" matInput [value]="(result.files) ? result.files[0].name : ''" [placeholder]="'Please prepare your files to upload...'" readonly />

        <!-- Clear button -->
        <button *ngIf="(result.files) ? result.files[0].name : null" matSuffix mat-icon-button aria-label="Clear" (click)="clearInput()">
          <mat-icon>close</mat-icon>
        </button>

        <!-- Files button: to trigger files inputs/chooser dialog -->
        <button mat-raised-button (click)="fileInput.click()">Choose File</button>
      </mat-form-field>
    </mat-dialog-content>

    <!-- Dialog action button -->
    <mat-dialog-actions class="custom-mat-dialog-actions text-center">
      <button mat-flat-button color="accent" cdkFocusInitial (click)="onActionBtnClick()" [innerHTML]="dialogData.backButtonText"></button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFDialogFileUploadPromptComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;

  dialogData: DialogData = {
    field: null,
    backendService: '',
    appearance: 'outline',
    color: 'accent',
    title: 'Confirm!',
    messages: 'Are you sure?',
    backButtonText: 'Back',
  };

  isInUploadProcess!: boolean;
  
  result!: {
    files: FileList | any,
    uuid: string
  };

  constructor(
    private dialogRef: MatDialogRef<DFDialogFileUploadPromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private appSvc: AppService,
    private generalSvc: AppGeneralService,
  ) {
    this.result = {
      files: null,
      uuid: ''
    };
    this.isInUploadProcess = false;
  }

  ngOnInit(): void {
    // Set MAT_DIALOG_DATA to dialogData
    if (this.data?.backendService !== undefined) this.dialogData.backendService = this.data?.backendService;
    if (this.data?.field !== undefined) this.dialogData.field = this.data?.field;
    if (this.data?.appearance !== undefined) this.dialogData.appearance = this.data?.appearance;
    if (this.data?.color !== undefined) this.dialogData.color = this.data?.color;
    if (this.data?.title !== undefined) this.dialogData.title = this.data?.title;
    if (this.data?.messages !== undefined) this.dialogData.messages = this.data?.messages;
    if (this.data?.backButtonText !== undefined) this.dialogData.backButtonText = this.data?.backButtonText;
  }

  public onActionBtnClick(): void {
    this.dialogRef.close(this.result ?? false);
  }

  public clearInput() {
    this.result.files = null;
  }

  public onSelected(files: FileList | null) {
    if (files && files[0]) {
      let formData = new FormData();
      Array.from(files).forEach((file: File, fileIndex: number) => {
        formData.append(`files[${fileIndex}]`, file);
      });

      this.sendData(formData, files, '/' + this.dialogData.backendService);
    }
  }

  private sendData(formData: FormData, files: FileList, stringParams: string = '') {
    this.appSvc.create(AppServiceType.MAIN_UPLOAD_FILE, formData, new HttpParams, stringParams).subscribe(
      (successResponse: ResponseFormat) => {
        this.result = {
          files: files,
          uuid: successResponse.data
        };
        this.handleResponse(successResponse);
      },
      (errorResponse: ResponseFormat) => {
        this.handleResponse(errorResponse);
      },
      () => {
        this.isInUploadProcess = false;
      }
    );
  }

  private handleResponse(response: ResponseFormat): void {
    this.generalSvc.setResponseSnackBar(response);
  }

}
