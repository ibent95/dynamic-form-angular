import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { DFDialogFileUploadPromptComponent } from '../df-dialog-file-upload-prompt/df-dialog-file-upload-prompt.component';

@Component({
  selector: 'df-field-file-upload',
  templateUrl: './df-field-file-upload.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldFileUploadComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;
  @Input() isShowDetail: boolean = false;
  @Input() backendService!: string;

  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;

  formGroup!: FormGroup;
  isInUploadProcess!: boolean;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private dialog: MatDialog,
  ) {
    this.formGroup = this.parentFormGroup.form;
    this.value = this.value || null;
    this.type = new EventEmitter<any>();
    this.change = new EventEmitter<any>();
    this.isInUploadProcess = false;
  }

  public onPrepareButtonClick(): void {
    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
        field: this.field,
        backendService: this.backendService,
        appearance: 'outline',
        color: 'accent',
        title: 'Upload File',
        messages: 'Please prepare your files.',
        backButtonText: 'Back',
      }
    };

    // Dialog initial configuration and open
    const dialogRef = this.dialog.open(DFDialogFileUploadPromptComponent, dialogConfig);

    // Subscribe to dialog closed event
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        this.isInUploadProcess = true;

        this.onSelected(response);
      } else {
        this.isInUploadProcess = false;
      }
    });
  }

  private onSelected(result: any) {
    this.formGroup.get(this.field.field_name)?.setValue(result.uuid);
    this.value = result.files[0].name;
  }

  public clearInput() {
    this.formGroup.get(this.field?.field_name)?.patchValue(null);
    this.value = null;
  }

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }

}
