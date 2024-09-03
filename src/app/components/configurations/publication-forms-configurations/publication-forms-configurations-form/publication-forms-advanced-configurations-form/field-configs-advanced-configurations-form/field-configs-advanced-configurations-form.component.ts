import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface FieldConfigs {
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;

  orientation?: 'horizontal' | 'vertical';
  linear?: boolean;

  panel_description?: { mat_icon?: string }
}

export interface FieldConfigsInjectData {
  parentFormGroup: FormGroup;
  selectedFieldType?: {
    description?: string;
    dynamic_form_field_type: string;
    dynamic_form_field_type_code: string;
    dynamic_form_field_configs: FieldConfigs;
    dynamic_form_field_validation_configs: FieldConfigs;
    uuid?: string;
  };
}

@Component({
  selector: 'app-field-configs-advanced-configurations-form',
  templateUrl: './field-configs-advanced-configurations-form.component.html',
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldConfigsAdvancedConfigurationsFormComponent {
  readonly dialogRef: MatDialogRef<FieldConfigsAdvancedConfigurationsFormComponent, any> = inject(MatDialogRef<FieldConfigsAdvancedConfigurationsFormComponent>);
  readonly data: FieldConfigsInjectData = inject(MAT_DIALOG_DATA);
  readonly formBuilder: FormBuilder = inject(FormBuilder);

  dialogTitle: string = 'Field Configurations Form';

  parentFormGroup!: FormGroup;
  formGroup!: FormGroup;
  formRules!: any;
  formState: 'loading' | 'error' | 'loaded' | 'submiting' = 'loading' ;
  selectOptions: any = {
    orientation: [
      { value: 'horizontal', text: 'Horizontal' },
      { value: 'vertical', text: 'Vertical' },
    ],
    mat_icon: [
      { value: 'open_in_new', text: '<mat_icon>open_in_new</mat_icon> Signal Cellular Alt' },
      { value: 'signal_cellular_alt', text: '<mat_icon>signal_cellular_alt</mat_icon> Signal Cellular Alt' },
    ]
  };

  constructor() {
    this.parentFormGroup = this.data.parentFormGroup;
    this.formGroup = this.initiateForm(this.data.selectedFieldType?.dynamic_form_field_configs);
  }

  private initiateForm(fieldConfigs: any): FormGroup {
    this.formState = 'loading';
    let tempFormBuilderGroup: any = {};
    let formBuilderGroup: FormGroup;

    if (fieldConfigs && fieldConfigs.constructor === Object) {
      Object.entries(fieldConfigs).forEach(([key, value]: [any, any]) => {

        switch (value.constructor) {

          // Loop the array and recursive the item object to set form data
          case Array:
            let tempFormBuilderArray: Array<FormGroup> = [];

            value.forEach((item: any, index: number) => {
              tempFormBuilderArray.push(
                this.initiateForm(item)
              );
            });

            tempFormBuilderGroup[key] = this.formBuilder.array(tempFormBuilderArray);
            break;

          // Recursive the object to set form data
          case Object:
            tempFormBuilderGroup[key] = this.initiateForm(value);
            break;

          // Set the form data
          default:
            tempFormBuilderGroup[key] = value;
            break;

        }

      });
    } else {
      tempFormBuilderGroup = {
        min: null,
        minLength: null,
        max: null,
        maxLength: null,
        mat_icon: null
      };
    }

    formBuilderGroup = this.formBuilder.group(tempFormBuilderGroup);

    this.formState = 'loaded';

    return formBuilderGroup;
  }

  public onSaveForm() {
    this.formState = 'submiting';

    try {
      let values: string = this.getFormData();
      this.parentFormGroup.get('field_configs')?.patchValue(values);
      this.onCloseForm(values);
    } catch (error) {
      this.formState = 'loaded';
    }
  }

  private getFormData(): string {
    let results: any = this.formGroup.getRawValue();

    //switch (this.data.selectedFieldType?.dynamic_form_field_type_code) {
    //  case 'wizard':
    //    // code
    //    break;

    //  default:
    //    // code
    //    break;
    //}

    return JSON.stringify(results);
  }

  public onResetForm() {
    this.formGroup.reset();
  }

  public onCloseForm(results: any) {
    this.dialogRef.close(results);
  }

}
