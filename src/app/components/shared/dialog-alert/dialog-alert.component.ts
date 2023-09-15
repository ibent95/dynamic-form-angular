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
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent implements OnInit {

  dialogData: DialogData = {
    title: 'Confirm!',
    content_message: 'Are you sure?',
    no_button_available: true,
    no_button_label: 'No',
    yes_button_available: true,
    yes_button_label: 'Yes',
  };

  result!: any;

  constructor(
    private dialogRef: MatDialogRef<DialogAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {

    if (this.data?.title !== undefined) this.dialogData.title = this.data?.title;
    if (this.data?.content_message !== undefined) this.dialogData.content_message = this.data?.content_message;
    if (this.data?.no_button_available !== undefined) this.dialogData.no_button_available = this.data?.no_button_available;
    if (this.data?.no_button_label !== undefined) this.dialogData.no_button_label = this.data?.no_button_label;
    if (this.data?.yes_button_available !== undefined) this.dialogData.yes_button_available = this.data?.yes_button_available;
    if (this.data?.yes_button_label !== undefined) this.dialogData.yes_button_label = this.data?.yes_button_label;

  }

  public onNoBtnClick(): void {
    this.dialogRef.close('No');
  }

  public onYesBtnClick(): void {
    this.dialogRef.close('Yes');
  }

}