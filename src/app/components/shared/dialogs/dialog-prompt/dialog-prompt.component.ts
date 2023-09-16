import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  title: string;
  messages: string;
  noButtonText: string;
  yesButtonText: string;
}

@Component({
  selector: 'app-dialog-prompt',
  template: `
    <!-- Dialog title -->
    <h1 mat-dialog-title class="text-center" [innerHTML]="dialogData.title"></h1>

    <!-- Dialog content -->
    <mat-dialog-content class="text-center">
      <p [innerHTML]="dialogData.messages"></p>
      <input type="text">
    </mat-dialog-content>

    <!-- Dialog action button -->
    <mat-dialog-actions class="custom-mat-dialog-actions text-center">
      <button mat-stroked-button mat-dialog-close (click)="onNoBtnClick()" [innerHTML]="dialogData.noButtonText"></button>
      <button mat-flat-button color="accent" [mat-dialog-close]="true" cdkFocusInitial (click)="onYesBtnClick()" [innerHTML]="dialogData.yesButtonText"></button>
  `,
  styles: [''],
})
export class DialogPromptComponent implements OnInit {

  dialogData: DialogData = {
    title: 'Confirm!',
    messages: 'Are you sure?',
    noButtonText: 'No',
    yesButtonText: 'Yes',
  };

  result!: any;

  constructor(
    private dialogRef: MatDialogRef<DialogPromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    if (this.data?.title !== undefined) this.dialogData.title = this.data?.title;
    if (this.data?.messages !== undefined) this.dialogData.messages = this.data?.messages;
    if (this.data?.noButtonText !== undefined) this.dialogData.noButtonText = this.data?.noButtonText;
    if (this.data?.yesButtonText !== undefined) this.dialogData.yesButtonText = this.data?.yesButtonText;
  }

  public onNoBtnClick(): void {
    this.dialogRef.close('No');
  }

  public onYesBtnClick(): void {
    this.dialogRef.close('Yes');
  }

}