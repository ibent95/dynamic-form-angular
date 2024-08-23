import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageState } from 'src/app/services/app-general.service';
import { AppFormStatus } from 'src/app/services/app.service';

@Component({
  selector: 'app-publication-forms-configurations-form',
  templateUrl: './publication-forms-configurations-form.component.html',
  styleUrls: ['./publication-forms-configurations-form.component.scss']
})
export class PublicationFormsConfigurationsFormComponent implements OnInit {

  pageState!: PageState;

  // All forms and user input in angular form bulder
  forms!: FormGroup;

  formStatus!: AppFormStatus;
  formStates!: any;

  userData!: any;

  // All select`s options in forms
  selectOptions!: any;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formStates = {
      isFormCreated: false,
      isLoading: false,
      isFormCancelButtonDisabled: false,
      isSubmited: false,
      isError: false,
    };
    this.pageState = PageState.LOADING;
  }

  ngOnInit(): void {

    this.userData = window.history?.state;
    this.formStatus = (this.userData?.uuid) ? AppFormStatus.UPDATE : AppFormStatus.CREATE ;
    this.formInit();

  }

  private formInit() {
    this.forms = this.formBuilder.group({
      uuid: [this.userData?.uuid || '', (this.formStatus === AppFormStatus.UPDATE) ? [Validators.required] : []],
      field_label: [this.userData?.field_label || ''],
      field_type: [this.userData?.field_type || '', [Validators.required]],
      field_name: [this.userData?.field_name || ''],
      field_id: [this.userData?.field_id || '', [Validators.required]],
      field_class: [this.userData?.field_class || '', []],
      field_placeholder: [this.userData?.field_placeholder || ''],
      field_options: [this.userData?.field_options || []],
      field_configs: [this.userData?.field_configs || ''], // Array || Object
      description: [this.userData?.description || ''],
      order_position: [this.userData?.order_position || 1, [Validators.required]],
      validation_configs: [this.userData?.validation_configs || ''], // Array || Object
      error_message: [this.userData?.error_message || ''],
      dependency_child: [this.userData?.dependency_child || []],
      dependency_parent: [this.userData?.dependency_parent || []],
      flag_required: [this.userData?.flag_required || true, [Validators.required]],
      flag_field_form_type: [this.userData?.flag_field_form_type || false, [Validators.required]],
      flag_field_title: [this.userData?.flag_field_title || false, [Validators.required]],
      flag_field_publish_date: [this.userData?.flag_field_publish_date || false, [Validators.required]],
      flag_active: [this.userData?.flag_active || true, [Validators.required]],
      uuid_form_version: [this.userData?.uuid_form_version || ''],
      uuid_form_parent: [this.userData?.uuid_form_parent || ''],
    });

    this.pageState = PageState.LOADED;
  }

  public onFormSubmitButtonClick(): void {

  }

  public onFormCancelButtonClick(): void {

  }

}
