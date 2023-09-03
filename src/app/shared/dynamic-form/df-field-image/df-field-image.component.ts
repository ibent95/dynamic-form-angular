import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/shared/dynamic-form/dynamic-forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-image',
  templateUrl: './df-field-image.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldImageComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  @ViewChild('fileInput') fileInput!: ElementRef;

  formGroup!: FormGroup;
  imageSrcs!: string | ArrayBuffer | null;
  private fileReader!: FileReader;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
    this.fileReader = new FileReader();
  }

  ngOnInit(): void {
    this.value = this.formGroup.get(this.field?.field_name)?.value;
  }

  onSelected(files: FileList | null) {
    if (files && files[0] && files[0].type.match(/image\/*/) != null) {
      this.formGroup.get(this.field.field_name)?.setValue(files[0]);
      this.value = files[0].name;
      this.setImagesPreviews(files);
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

  clearInput() {
    this.formGroup.get(this.field?.field_name)?.patchValue(null);
    this.value = null;
    this.imageSrcs = null;
    this.fileReader = new FileReader();
  }

}
