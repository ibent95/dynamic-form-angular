import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { DFDialogFileUploadPromptComponent } from '../df-dialog-file-upload-prompt/df-dialog-file-upload-prompt.component';

@Component({
  selector: 'df-field-image-upload',
  templateUrl: './df-field-image-upload.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldImageUploadComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;
  @Input() isShowDetail: boolean = false;
  @Input() backendService!: string;

  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;

  formGroup!: FormGroup;
  imageSrcs!: string | ArrayBuffer | null;
  private fileReader!: FileReader;
  isInUploadProcess!: boolean;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private dialog: MatDialog,
  ) {
    this.formGroup = this.parentFormGroup.form;
    this.value = this.value || null;
    this.fileReader = new FileReader();
    this.type = new EventEmitter<any>();
    this.change = new EventEmitter<any>();
    this.isInUploadProcess = false;
  }

  public onPrepareButtonClick(): void {
    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
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
    dialogRef.afterClosed().subscribe((results: any) => {
      if (results) {
        this.isInUploadProcess = true;

        this.onSelected(results);
      } else {
        this.isInUploadProcess = false;
      }
    });

  }

  onSelected(results: any) {
    if (results.files && results.files[0] && results.files[0].type.match(/image\/*/) != null) {
      this.formGroup.get(this.field.field_name)?.setValue(results.uuid);
      this.value = results.files[0].name;
      this.setImagesPreviews(results.files);
    }
    // For set error message when input files is not image
    // else if (files && files[0] && files[0].type.match(/image\/*/) == null) {
    //}
  }

  private setImagesPreviews(files: FileList) {
    this.fileReader.readAsDataURL(files[0]);
    this.fileReader.onload = (_event) => {
      this.imageSrcs = this.fileReader.result;
    }
  }

  public clearInput() {
    this.formGroup.get(this.field?.field_name)?.patchValue(null);
    this.value = null;
    this.imageSrcs = null;
    this.fileReader = new FileReader();
  }

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }

}
