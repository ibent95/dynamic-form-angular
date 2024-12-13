import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FieldConfigsAdvancedConfigurationsFormComponent } from './field-configs-advanced-configurations-form/field-configs-advanced-configurations-form.component';
import { SelectOptionsInterface } from '../publication-forms-configurations-form.component';
import { ValidationConfigsAdvancedConfigurationsFormComponent } from './validation-configs-advanced-configurations-form/validation-configs-advanced-configurations-form.component';
import { FieldDependenciesConfigsAdvancedConfigurationsFormComponent } from './field-dependencies-configs-advanced-configurations-form/field-dependencies-configs-advanced-configurations-form.component';
import { AppFormStatus } from 'src/app/services/app.service';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-publication-forms-advanced-configurations-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './publication-forms-advanced-configurations-form.component.html',
  styleUrls: ['./publication-forms-advanced-configurations-form.component.scss'],
})
export class PublicationFormsAdvancedConfigurationsFormComponent implements OnInit, OnChanges {

  private parentFormGroup: FormGroupDirective = inject(FormGroupDirective);
  readonly dialog = inject(MatDialog);

  formGroup!: FormGroup;

  @Input() initialForm!: FormGroup;
  @Input() selectOptions!: SelectOptionsInterface;
  @Input() formStatus!: AppFormStatus;

  selectedFieldType!: any;

  fieldConfigsForm!: MatDialogRef<FieldConfigsAdvancedConfigurationsFormComponent, any>;
  validationConfigsForm!: MatDialogRef<ValidationConfigsAdvancedConfigurationsFormComponent, any>;
  fieldDependenciesConfigsForm!: MatDialogRef<FieldDependenciesConfigsAdvancedConfigurationsFormComponent, any>;
  dialogEnterAnimationDuration: string = '100ms';
  dialogExitAnimationDuration: string = '100ms';

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup.form;
    this.selectedFieldType = this.getSelectedType();
    this.subscribeInitialFormChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectOptions']) {
      this.selectOptions = changes['selectOptions'].currentValue;
    }
  }

  private getSelectedType(): any {
    return this.selectOptions['fieldTypes']?.find((fieldType: any) => fieldType.dynamic_form_field_type_code === this.initialForm.get('field_type')?.value)
  }

  private subscribeInitialFormChanges(): void {
    this.initialForm.get('uuid_form_version')?.valueChanges?.subscribe((value: any) => {
      this.formGroup.patchValue({
        'dependency_parent': null,
        'dependency_child': null,
      });
    });

    this.initialForm.get('field_type')?.valueChanges?.subscribe((value: any) => {
      this.selectedFieldType = this.getSelectedType();

      this.formGroup.patchValue({
        'field_configs': null,
        'validation_configs': null,
      });
    });

    /** This code is to get all changes in intialForm, but maybe not used soo I commented it.
     * this.initialForm.valueChanges?.subscribe((value: any) => {
     *  if (value.field_type) {
     *    this.selectedFieldType = this.getSelectedType();
     *  }
     * });
     */
  }

  public onChangeFieldConfigurations(): void {
    this.fieldConfigsForm = this.dialog.open(FieldConfigsAdvancedConfigurationsFormComponent, {
      data: {
        parentFormGroup: this.formGroup,
        selectedFieldType: this.selectedFieldType,
        formStatus: this.formStatus,
      },
      width: '750px',
      maxWidth: '750px',
      enterAnimationDuration: this.dialogEnterAnimationDuration,
      exitAnimationDuration: this.dialogExitAnimationDuration,
      closeOnNavigation: false,
      disableClose: true
    });

    this.fieldConfigsForm.afterClosed().subscribe((results: any) => {
      //console.log("fieldConfigsForm.afterClosed() results", results);
    });
  }

  public onChangeFieldValidationConfigurations(): void {
    this.validationConfigsForm = this.dialog.open(ValidationConfigsAdvancedConfigurationsFormComponent, {
      data: {
        parentFormGroup: this.formGroup,
        selectedFieldType: this.selectedFieldType,
        formStatus: this.formStatus,
      },
      width: '750px',
      maxWidth: '750px',
      enterAnimationDuration: this.dialogEnterAnimationDuration,
      exitAnimationDuration: this.dialogExitAnimationDuration,
      closeOnNavigation: false,
      disableClose: true
    });

    this.validationConfigsForm.afterClosed().subscribe((results: any) => {
      //console.log("validationConfigsForm.afterClosed() results", results);
    });
  }

  public onChangeFieldDependenciesConfigurations(): void {
    this.fieldDependenciesConfigsForm = this.dialog.open(FieldDependenciesConfigsAdvancedConfigurationsFormComponent, {
      data: {
        parentFormGroup: this.formGroup,
        selectedFieldType: this.selectedFieldType,
        selectOptions: this.selectOptions,
        formStatus: this.formStatus,
      },
      width: '1200px',
      maxWidth: '1200px',
      enterAnimationDuration: this.dialogEnterAnimationDuration,
      exitAnimationDuration: this.dialogExitAnimationDuration,
      closeOnNavigation: false,
      disableClose: true
    });

    this.fieldDependenciesConfigsForm.afterClosed().subscribe((results: any) => {
      //console.log("fieldDependenciesConfigsForm.afterClosed() results", results);
    });
  }

}
