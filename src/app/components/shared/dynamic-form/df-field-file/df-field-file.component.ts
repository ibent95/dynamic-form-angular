import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
export class DFFieldFileComponent implements OnInit {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;
  @Input() isShowDetail: boolean = false;

  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;

  @ViewChild('fileInput') fileInput!: ElementRef;

  formGroup!: FormGroup;
  fileHasChanged: boolean;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form;
    this.type = new EventEmitter<any>();
    this.change = new EventEmitter<any>();
    this.fileHasChanged = false;
  }

  ngOnInit(): void {
    if (!this.value && this.field?.value) {
      this.value = this.field?.value;
      this.fileHasChanged = false;
    }
  }

  onSelected(files: FileList | null) {
    if (files && files[0]) {
      this.formGroup.get(this.field.field_name)?.setValue(files[0]);
      this.value = files[0].name;
      this.fileHasChanged = true;
    }
  }

  clearInput() {
    this.formGroup.get(this.field?.field_name)?.patchValue(null);
    this.value = null;
    this.fileHasChanged = true;
  }

  public onType(data: any) {
    this.fileHasChanged = true;
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.fileHasChanged = true;
    this.change.emit(data);
  }

}
