import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  title: string;
  messages: string;
  cancelButtonText: string;
  draftButtonText: string;
  proceedButtonText: string;
}

@Component({
  selector: 'app-custom-dialog-publication-submit-confirm',
  template: `
    <!-- Dialog title -->
    <h1 mat-dialog-title class="text-center" [innerHTML]="dialogData.title"></h1>

    <!-- Dialog content -->
    <mat-dialog-content class="text-center" [innerHTML]="dialogData.messages"></mat-dialog-content>

    <!-- Dialog action button -->
    <mat-dialog-actions class="custom-mat-dialog-actions text-center">
      <button mat-stroked-button mat-dialog-close (click)="onActionBtnClick()" [innerHTML]="dialogData.cancelButtonText"></button>
      <button mat-flat-button color="primary" cdkFocusInitial (click)="onActionBtnClick('draft')" [innerHTML]="dialogData.draftButtonText"></button>
      <button mat-flat-button color="accent" cdkFocusInitial (click)="onActionBtnClick(true)" [innerHTML]="dialogData.proceedButtonText"></button>
    </mat-dialog-actions>
  `,
  styles: ['']
})
export class CustomDialogPublicationSubmitConfirmComponent {

  dialogData: DialogData = {
    title: 'Confirm!',
    messages: 'Are you sure?',
    cancelButtonText: 'No',
    draftButtonText: 'Yes',
    proceedButtonText: 'Yes',
  };

  result!: undefined | {
    response: boolean | 'draft' | null
    user_choice: boolean | 'draft' | null
    result: boolean | 'draft' | null
  };

  constructor(
    private dialogRef: MatDialogRef<CustomDialogPublicationSubmitConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    // Set MAT_DIALOG_DATA to dialogData
    if (this.data?.title !== undefined) this.dialogData.title = this.data?.title;
    if (this.data?.messages !== undefined) this.dialogData.messages = this.data?.messages;
    if (this.data?.cancelButtonText !== undefined) this.dialogData.cancelButtonText = this.data?.cancelButtonText;
    if (this.data?.draftButtonText !== undefined) this.dialogData.draftButtonText = this.data?.draftButtonText;
    if (this.data?.proceedButtonText !== undefined) this.dialogData.proceedButtonText = this.data?.proceedButtonText;
  }

  public onActionBtnClick(response: 'draft' | true | null = null): void {
    this.dialogRef.close(response);
  }

}
