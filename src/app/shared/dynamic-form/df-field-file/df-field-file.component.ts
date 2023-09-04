import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/shared/dynamic-form/dynamic-forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-file',
  templateUrl: './df-field-file.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldFileComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  @ViewChild('fileInput') fileInput!: ElementRef;

  formGroup!: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
  }

  ngOnInit(): void {
    this.value = this.formGroup.get(this.field?.field_name)?.value;
  }

  onSelected(files: FileList | null) {
    if (files && files[0]) {
      this.formGroup.get(this.field.field_name)?.setValue(files[0]);
      this.value = files[0].name;
    }
  }

  clearInput() {
    this.formGroup.get(this.field?.field_name)?.patchValue(null);
    this.value = null;
  }

}
