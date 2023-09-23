import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
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
  @Input() isShowDetail: boolean = false;

  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;

  @ViewChild('fileInput') fileInput!: ElementRef;

  formGroup!: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form;
    this.type = new EventEmitter<any>();
    this.change = new EventEmitter<any>();
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

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }
  
}
