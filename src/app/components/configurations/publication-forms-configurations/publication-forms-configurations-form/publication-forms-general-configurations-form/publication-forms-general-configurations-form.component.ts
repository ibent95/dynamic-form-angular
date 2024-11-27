import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CodemirrorComponent } from 'src/app/components/shared/codemirror/codemirror.component';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';

@Component({
  selector: 'app-publication-forms-general-configurations-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, LoaderComponent, CodemirrorComponent],
  templateUrl: './publication-forms-general-configurations-form.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationFormsGeneralConfigurationsFormComponent implements OnInit {

  formGroup!: FormGroup;

  @Input() selectOptions!: any;
  @Input() positionMinValue: number = 0;

  constructor(
    private parentFormGroup: FormGroupDirective,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup.form;
  }

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
