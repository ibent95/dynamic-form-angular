import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  title: string;
  messages: string;
  okButtonText: string;
}

@Component({
  selector: 'app-dialog-alert',
  template: `
    <!-- Dialog title -->
    <h1 mat-dialog-title class="text-center" [innerHTML]="dialogData.title"></h1>

    <!-- Dialog content -->
    <mat-dialog-content class="text-center" [innerHTML]="dialogData.messages"></mat-dialog-content>

    <!-- Dialog action button -->
    <mat-dialog-actions class="custom-mat-dialog-actions text-center">
      <button mat-flat-button color="accent" [mat-dialog-close]="true" cdkFocusInitial (click)="onYesBtnClick()" [innerHTML]="dialogData.okButtonText"></button>
    </mat-dialog-actions>
  `,
  styles: [''],
})
export class DialogAlertComponent implements OnInit {

  dialogData: DialogData = {
    title: 'Confirm!',
    messages: 'Are you sure?',
    okButtonText: 'Yes',
  };

  result!: any;

  constructor(
    private dialogRef: MatDialogRef<DialogAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    if (this.data?.title !== undefined) this.dialogData.title = this.data?.title;
    if (this.data?.messages !== undefined) this.dialogData.messages = this.data?.messages;
    if (this.data?.okButtonText !== undefined) this.dialogData.okButtonText = this.data?.okButtonText;
  }

  public onNoBtnClick(): void {
    this.dialogRef.close('No');
  }

  public onYesBtnClick(): void {
    this.dialogRef.close('Yes');
  }

}