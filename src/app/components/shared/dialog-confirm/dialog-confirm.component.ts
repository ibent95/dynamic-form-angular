import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  title: string;
  content_message: string;
  no_button_available: boolean;
  no_button_label: string;
  yes_button_available: boolean;
  yes_button_label: string;
}

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogConfirmComponent implements OnInit {

  dialogData: DialogData = {
    title: 'Confirm!',
    content_message: 'Are you sure?',
    no_button_available: true,
    no_button_label: 'No',
    yes_button_available: true,
    yes_button_label: 'Yes',
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
    if (this.data?.content_message !== undefined) this.dialogData.content_message = this.data?.content_message;
    if (this.data?.no_button_available !== undefined) this.dialogData.no_button_available = this.data?.no_button_available;
    if (this.data?.no_button_label !== undefined) this.dialogData.no_button_label = this.data?.no_button_label;
    if (this.data?.yes_button_available !== undefined) this.dialogData.yes_button_available = this.data?.yes_button_available;
    if (this.data?.yes_button_label !== undefined) this.dialogData.yes_button_label = this.data?.yes_button_label;

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