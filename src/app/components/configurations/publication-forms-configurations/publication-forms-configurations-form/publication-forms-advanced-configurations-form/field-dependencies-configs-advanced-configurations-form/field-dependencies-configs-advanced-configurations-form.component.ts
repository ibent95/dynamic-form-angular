import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DFField, DFFieldDependencyChildConfigs, DFFieldDependencyConfigs, DFFieldDependencyConfigsLogicMap, DFFieldDependencyConfigsLogicMapParentField, DFFieldDependencyConfigsLogicMapParentFields, DFFieldDependencyParentConfigs } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { SelectOptionsInterface } from '../../publication-forms-configurations-form.component';
import { AppFormStatus } from 'src/app/services/app.service';

export interface FieldDependenciesConfigs {
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;

  orientation?: 'horizontal' | 'vertical';
  linear?: boolean;

  panel_description?: { mat_icon?: string }
}

export interface FieldDependenciesConfigsInjectData {
  parentFormGroup: FormGroup;
  selectedFieldType: {
    description?: string;
    dynamic_form_field_type: string;
    dynamic_form_field_type_code: string;
    dynamic_form_field_configs: FieldDependenciesConfigs;
    dynamic_form_field_validation_configs: FieldDependenciesConfigs;
    dynamic_form_field_dependency_parent_configs: Array<DFFieldDependencyConfigsLogicMapParentField>;
    dynamic_form_field_dependency_child_configs: Array<DFFieldDependencyConfigs> ;
    uuid?: string;
  };
  selectOptions: SelectOptionsInterface;
  formStatus: AppFormStatus;
}

@Component({
  selector: 'app-field-dependencies-configs-advanced-configurations-form',
  templateUrl: './field-dependencies-configs-advanced-configurations-form.component.html',
  styles: ['::ng-deep mat-divider.custom-border { /** border-top-width: 2px !important; border-color: #808080de; */ }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldDependenciesConfigsAdvancedConfigurationsFormComponent {
  readonly dialogRef: MatDialogRef<FieldDependenciesConfigsAdvancedConfigurationsFormComponent, any> = inject(MatDialogRef<FieldDependenciesConfigsAdvancedConfigurationsFormComponent>);
  readonly data: FieldDependenciesConfigsInjectData = inject(MAT_DIALOG_DATA);
  readonly formBuilder: FormBuilder = inject(FormBuilder);

  dialogTitle: string = 'Field Dependencies Configurations Form';

  parentFormGroup!: FormGroup;
  formGroup!: FormGroup;
  formStatus!: AppFormStatus;
  formRules!: any;
  formState: 'loading' | 'error' | 'empty' | 'loaded' | 'submiting' = 'loading';
  selectOptions: any = {
    orientation: [
      { value: 'horizontal', text: 'Horizontal' },
      { value: 'vertical', text: 'Vertical' },
    ],
    mat_icon: [
      { value: 'open_in_new', text: '<mat_icon>open_in_new</mat_icon> Signal Cellular Alt' },
      { value: 'add_box', text: '<mat_icon>add_box</mat_icon> Add Box' },
      { value: 'add_circle', text: '<mat_icon>add_circle</mat_icon> Add Circle' },
      { value: 'edit', text: '<mat_icon>edit</mat_icon> Edit' },
      { value: 'edit_square', text: '<mat_icon>edit_square</mat_icon> Edit Square' },
      { value: 'remove', text: '<mat_icon>remove</mat_icon> Remove' },
      { value: 'delete', text: '<mat_icon>delete</mat_icon> Delete' },
      { value: 'cancel', text: '<mat_icon>cancel</mat_icon> Cancel' },
      { value: 'signal_cellular_alt', text: '<mat_icon>signal_cellular_alt</mat_icon> Signal Cellular Alt' },
    ]
  };
  dependencyParentConfigs!: Array<DFFieldDependencyConfigsLogicMapParentField>;
  dependencyChildConfigs!: Array<DFFieldDependencyConfigs>;

  tempDependencyChildActionLogicMapParentFields: any = {
    field: {
      field_type: null,
      field_name: null,
      field_id: null,
      field_class: null,
      uuid: null
    },
    comparison: null,
    value: null
  };
  tempDependencyChildActionLogicMap: any = {
    logic: null,
    parent_fields: [ this.tempDependencyChildActionLogicMapParentFields ]
  };
  tempDependencyChild: any = {
    action: null,
    logic_map: [ this.tempDependencyChildActionLogicMap ]
  };

  /**
   * Before form create
   */

  constructor() {
    this.formStatus = this.data.formStatus;
    this.parentFormGroup = this.data.parentFormGroup;

    this.dependencyParentConfigs = (
      this.formStatus === AppFormStatus.UPDATE
      && this.parentFormGroup.get('dependency_parent')?.getRawValue()
    )
      ? JSON.parse(
        this.parentFormGroup.get('dependency_parent')?.getRawValue()
      )
      : this.data.selectedFieldType?.dynamic_form_field_dependency_parent_configs;

    this.dependencyChildConfigs = (
      this.formStatus === AppFormStatus.UPDATE
      && this.parentFormGroup.get('dependency_child')?.getRawValue()
    )
      ? JSON.parse(
        this.parentFormGroup.get('dependency_child')?.getRawValue() || "[]"
      )
      : this.data.selectedFieldType?.dynamic_form_field_dependency_child_configs;

    this.formGroup = this.initiateForm(this.dependencyChildConfigs);
  }

  private initiateForm(dependencyChildConfigs: Array<DFFieldDependencyConfigs>): FormGroup {
    this.formState = 'loading';
    let formParentArray: FormArray = this.formBuilder.array([]);
    let formChildArray: FormArray = this.formBuilder.array([]);

    dependencyChildConfigs.forEach((item: DFFieldDependencyConfigs, itemIndex: number) => {
      formChildArray.push(
        this.addChildDependency(item)
      );
    });

    this.formState = 'loaded';

    return this.formBuilder.group({
      dependency_parent_configs: formParentArray,
      dependency_child_configs: formChildArray,
    })
  }

  private addParentDependency(selectedFormFieldParent: DFField): FormGroup {

    let tempFormBuilderGroup: any = {};
    let formBuilderGroup: FormGroup;

    // Add new form group later

    formBuilderGroup = this.formBuilder.group(tempFormBuilderGroup);

    return formBuilderGroup;
  }

  private addChildDependency(
    dependencyChildConfigs: DFFieldDependencyConfigs = this.tempDependencyChild
  ): FormGroup {

    let dependecyChildFormGroup: any = {
      action: dependencyChildConfigs.action,
      logic_map: this.formBuilder.array([]),
    };

    dependencyChildConfigs.logic_map?.forEach((item: DFFieldDependencyConfigsLogicMap, itemIndex: number) => {
      dependecyChildFormGroup.logic_map?.push(
        this.addChildDependencyLogicMap(item)
      );
    });

    return this.formBuilder.group(dependecyChildFormGroup);
  }

  private addChildDependencyLogicMap(
    dependencyChildConfigsLogicMap: DFFieldDependencyConfigsLogicMap = this.tempDependencyChildActionLogicMap
  ): FormGroup {

    let dependecyChildLogicMapFormGroup: any = {
      logic: dependencyChildConfigsLogicMap.logic,
      parent_fields: this.formBuilder.array([]),
    };

    dependencyChildConfigsLogicMap.parent_fields?.forEach((item: DFFieldDependencyConfigsLogicMapParentFields, itemIndex: number) => {
      dependecyChildLogicMapFormGroup.parent_fields?.push(
        this.addChildDependencyActionLogicMapParentFields(item)
      );
    });

    return this.formBuilder.group(dependecyChildLogicMapFormGroup);
  }

  private addChildDependencyActionLogicMapParentFields(
    dependencyChildConfigsLogicMapParentFields: DFFieldDependencyConfigsLogicMapParentFields = this.tempDependencyChildActionLogicMapParentFields
  ): FormGroup {

    let dependecyChildLogicMapParentFieldsFormGroup: any = {
      field: this.formBuilder.group({
        field_type: dependencyChildConfigsLogicMapParentFields.field?.field_type,
        field_name: dependencyChildConfigsLogicMapParentFields.field?.field_name,
        field_id: dependencyChildConfigsLogicMapParentFields.field?.field_id,
        field_class: dependencyChildConfigsLogicMapParentFields.field?.field_class,
        uuid: dependencyChildConfigsLogicMapParentFields.field?.uuid,
      }),
      comparison: dependencyChildConfigsLogicMapParentFields.comparison,
      value: dependencyChildConfigsLogicMapParentFields.value
    };

    return this.formBuilder.group(dependecyChildLogicMapParentFieldsFormGroup);
  }

  /**
   * After form created
   */

  public onAddChildDependency(formChildIndex?: number) {
    const arrayControlName = `dependency_child_configs`;
    const arrayControl = this.formGroup.get(arrayControlName) as FormArray;

    arrayControl.push(
      this.addChildDependency(this.tempDependencyChild)
    );
  }

  public onRemoveChildDependency(formChildIndex: number) {
    const arrayControlName = `dependency_child_configs`;
    const arrayControl = this.formGroup.get(arrayControlName) as FormArray;

    arrayControl.removeAt(formChildIndex);
  }

  public onAddChildDependencyActionLogicMap(formChildIndex?: number, formChildLogicMapIndex?: number) {
    const arrayControlName = `dependency_child_configs.${formChildIndex}.logic_map`;
    const arrayControl = this.formGroup.get(arrayControlName) as FormArray;

    arrayControl.push(
      this.addChildDependencyLogicMap(this.tempDependencyChildActionLogicMap)
    );
  }

  public onRemoveChildDependencyActionLogicMap(formChildIndex: number, formChildLogicMapIndex: number) {
    const arrayControlName = `dependency_child_configs.${formChildIndex}.logic_map`;
    const arrayControl = this.formGroup.get(arrayControlName) as FormArray;

    arrayControl.removeAt(formChildLogicMapIndex);
  }

  public onAddChildDependencyActionLogicMapParentField(formChildIndex?: number, formChildLogicMapIndex?: number, formChildLogicMapParentFieldIndex?: number) {
    const arrayControlName = `dependency_child_configs.${formChildIndex}.logic_map.${formChildLogicMapIndex}.parent_fields`;
    const arrayControl = this.formGroup.get(arrayControlName) as FormArray;

    arrayControl.push(
      this.addChildDependencyActionLogicMapParentFields(this.tempDependencyChildActionLogicMapParentFields)
    );
  }

  public onRemoveChildDependencyActionLogicMapParentField(formChildIndex: number, formChildLogicMapIndex: number, formChildLogicMapParentFieldIndex: number) {
    const arrayControlName = `dependency_child_configs.${formChildIndex}.logic_map.${formChildLogicMapIndex}.parent_fields`;
    const arrayControl = this.formGroup.get(arrayControlName) as FormArray;

    arrayControl.removeAt(formChildLogicMapParentFieldIndex);
  }

  public onFormFieldParentChange(
    data: DFField,
    formChildIndex: number,
    formChildLogicMapIndex: number,
    formChildLogicMapParentFieldIndex: number
  ): void {
    const formDependencyChildLogicParentFieldControlName: string = `dependency_child_configs.${formChildIndex}.logic_map.${formChildLogicMapIndex}.parent_fields.${formChildLogicMapParentFieldIndex}.field`;

    this.formGroup.get(formDependencyChildLogicParentFieldControlName)?.patchValue({
      field_type: data?.field_type,
      field_name: data?.field_name,
      field_id: data?.field_id,
      field_class: data?.field_class,
      uuid: data?.uuid,
    });
  }

  /**
   * Before form close (destroy)
   */

  public onSaveForm() {
    this.formState = 'submiting';

    try {
      let values: { dependency_parent_configs: string, dependency_child_configs: string } = this.getFormData();
      //this.parentFormGroup.get('dependency_parent')?.patchValue(values.dependency_parent_configs);
      this.parentFormGroup.get('dependency_child')?.patchValue(values.dependency_child_configs);
      this.onCloseForm(values);
    } catch (error) {
      this.formState = 'loaded';
    }
  }

  private getFormData(): { dependency_parent_configs: string, dependency_child_configs: string } {
    let results: any = this.formGroup.getRawValue();



    return {
      dependency_parent_configs: JSON.stringify(results.dependency_parent_configs),
      dependency_child_configs: JSON.stringify(results.dependency_child_configs),
    };
  }

  public onResetForm() {
    this.formGroup.reset();
  }

  public onCloseForm(results: any) {
    this.dialogRef.close(results);
  }

}
