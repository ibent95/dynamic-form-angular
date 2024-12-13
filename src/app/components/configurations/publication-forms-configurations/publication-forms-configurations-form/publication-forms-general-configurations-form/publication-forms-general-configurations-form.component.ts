import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProsemirrorComponent } from 'src/app/components/shared/prosemirror/prosemirror.component';
import { AppControlValueAccessor } from 'src/app/services/app-general.service';

@Component({
  selector: 'app-publication-forms-general-configurations-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatSlideToggleModule, ProsemirrorComponent],
  templateUrl: './publication-forms-general-configurations-form.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationFormsGeneralConfigurationsFormComponent implements OnInit, OnChanges, AppControlValueAccessor {

  private parentFormGroup: FormGroupDirective = inject(FormGroupDirective);

  formGroup!: FormGroup;

  @Input() selectOptions!: any;
  @Input() positionMinValue: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup.form;
    console.log('formGroup', this.formGroup.getRawValue());
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  writeValue(data: any): void { }

	registerOnChange(data: any): void { }

	registerOnTouched(data: any): void { }

	setDisabledState(data: boolean): void { }

  // Set main field check value just one or not multiple check
  public setMainFieldCheck(fieldName: 'flag_field_form_type' | 'flag_field_title' | 'flag_field_publish_date') {
    if (fieldName === 'flag_field_form_type') {
      this.formGroup.patchValue({
        flag_field_title: false,
        flag_field_publish_date: false,
      });
    }

    if (fieldName === 'flag_field_title') {
      this.formGroup.patchValue({
        flag_field_form_type: false,
        flag_field_publish_date: false,
      });
    }

    if (fieldName === 'flag_field_publish_date') {
      this.formGroup.patchValue({
        flag_field_title: false,
        flag_field_form_type: false,
      });
    }
  }

  public onDescriptionFieldChange(data: any) {
    console.log('onDescriptionFieldChange data', data);

    this.formGroup.patchValue({description: data});
  }

}
