import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-publication-forms-general-configurations-form',
  templateUrl: './publication-forms-general-configurations-form.component.html',
  styles: ['']
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
