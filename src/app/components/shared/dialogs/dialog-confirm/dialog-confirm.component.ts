import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  title: string;
  messages: string;
  noButtonText: string;
  yesButtonText: string;
}

@Component({
  selector: 'app-dialog-confirm',
  template: `
    <!-- Dialog title -->
    <h1 mat-dialog-title class="text-center" [innerHTML]="dialogData.title"></h1>

    <!-- Dialog content -->
    <mat-dialog-content class="text-center" [innerHTML]="dialogData.messages"></mat-dialog-content>

    <!-- Dialog action button -->
    <mat-dialog-actions class="custom-mat-dialog-actions text-center">
      <button mat-stroked-button mat-dialog-close (click)="onNoBtnClick()" [innerHTML]="dialogData.noButtonText"></button>
      <button mat-flat-button color="accent" [mat-dialog-close]="true" cdkFocusInitial (click)="onYesBtnClick()" [innerHTML]="dialogData.yesButtonText"></button>
    </mat-dialog-actions>
  `,
  styles: [''],
})
export class DialogConfirmComponent implements OnInit {

  dialogData: DialogData = {
    title: 'Confirm!',
    messages: 'Are you sure?',
    noButtonText: 'No',
    yesButtonText: 'Yes',
  };

  result!: undefined | {
    response: boolean | null
    user_choice: boolean | null
    result: boolean | null
  };

  constructor(
    private dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {

    // Set MAT_DIALOG_DATA to dialogData
    if (this.data?.title !== undefined) this.dialogData.title = this.data?.title;
    if (this.data?.messages !== undefined) this.dialogData.messages = this.data?.messages;
    if (this.data?.noButtonText !== undefined) this.dialogData.noButtonText = this.data?.noButtonText;
    if (this.data?.yesButtonText !== undefined) this.dialogData.yesButtonText = this.data?.yesButtonText;

    // Initial value to result variable
    this.result = {
      response: null,
      user_choice: null,
      result: null,
    }

    this.subscribeToBeforeClosedDialog();
  }

  public onNoBtnClick(): void {
    this.result = {
      response: false,
      user_choice: false,
      result: false,
    }
  }

  public onYesBtnClick(): void {
    this.result = {
      response: true,
      user_choice: true,
      result: true,
    }
  }

  private subscribeToBeforeClosedDialog() {
    this.dialogRef.beforeClosed().subscribe((result: any) => {
      this.dialogRef.close(this.result);
    });
  }

}