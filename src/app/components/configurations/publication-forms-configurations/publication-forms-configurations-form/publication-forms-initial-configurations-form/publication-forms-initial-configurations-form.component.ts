import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectOptionsInterface } from '../publication-forms-configurations-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { CodemirrorComponent } from 'src/app/components/shared/codemirror/codemirror.component';
import { AppControlValueAccessor } from 'src/app/services/app-general.service';

@Component({
  selector: 'app-publication-forms-initial-configurations-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, LoaderComponent, CodemirrorComponent],
  templateUrl: './publication-forms-initial-configurations-form.component.html',
  styleUrls: ['./publication-forms-initial-configurations-form.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationFormsInitialConfigurationsFormComponent implements OnInit, OnChanges, AppControlValueAccessor {

  private parentFormGroup: FormGroupDirective = inject(FormGroupDirective);
  private ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  formGroup!: FormGroup;

  @Input() selectOptions!: SelectOptionsInterface;
  @Input() publicationFormParentSelectOptionsLoaded: boolean = true;

  selectedFormVersion: any;
  selectedFormVersionLoading: boolean = true;
  selectedFieldType: any;
  selectedFieldTypeLoading: boolean = true;
  selectedParentForm: any;
  selectedParentFormLoading: boolean = false; // Set value to false first because it will be trigger by form version changes

  @Output() onPublicationFormVersionChange: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() onPublicationFieldTypeChange: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() onPublicationFormParentChange: EventEmitter<any> = new EventEmitter<any>(true);

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup.form;

    let formFieldTypeValue: string = this.formGroup.get('field_type')?.value;
    let formVersionValue: string = this.formGroup.get('uuid_form_version')?.value;
    let formParentValue: string = this.formGroup.get('uuid_form_parent')?.value;

    if (formVersionValue) {
      this.selectedFormVersion = this.selectOptions.formVersions?.find((item: any) => item.uuid === formVersionValue);

      this.onFormVersionChange(this.selectedFormVersion);
    }

    if (formFieldTypeValue) {
      this.selectedFieldType = this.selectOptions.fieldTypes?.find((item: any) => item.dynamic_form_field_type_code === formFieldTypeValue);

      this.onFieldTypeChange(this.selectedFieldType);
    }

    if (formParentValue) {
      this.selectedParentForm = this.selectOptions.forms?.find((item: any) => item.uuid === formParentValue);

      this.onParentFormChange(this.selectedParentForm);
    }

    this.ref.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['publicationFormParentSelectOptionsLoaded']) {
      /**
       * Set this.selectedParentFormLoading to negation of this.formParentSelectOptionsLoaded
       * because the this.selectedParentFormLoading has oposite condition
       */
      this.selectedParentFormLoading = !this.publicationFormParentSelectOptionsLoaded;

      if (this.formGroup && !this.selectedParentFormLoading) {
        let formParentValue: string = this.formGroup.get('uuid_form_parent')?.value;

        if (formParentValue) {
          this.selectedParentForm = this.selectOptions.forms?.find((item: any) => item.uuid === formParentValue);
          this.onParentFormChange(this.selectedParentForm);
        }
      }
    }

  }

  writeValue(data: any): void { }

	registerOnChange(data: any): void { }

	registerOnTouched(data: any): void { }

	setDisabledState(data: boolean): void { }

  public onFormVersionChange(data: any) {
    this.selectedFormVersionLoading = true;
    this.selectedFormVersion = data;

    this.selectedFormVersionLoading = false;
    this.selectedParentForm = null; // Remove the selected form parent
    this.onPublicationFormVersionChange.next(data);
  }

  public onFieldTypeChange(data: any) {
    this.selectedFieldTypeLoading = true;
    this.selectedFieldType = data;

    this.selectedFieldTypeLoading = false;
    this.onPublicationFieldTypeChange.next(data);
  }

  public onParentFormChange(data: any) {
    this.selectedParentFormLoading = true;
    this.selectedParentForm = data;

    this.selectedParentFormLoading = false;
    this.onPublicationFormParentChange.next(data);
  }

  public jsonParse(data: string): any {
    return JSON.parse(data);
  }

  public jsonStringify(data: any): string {
    return JSON.stringify(data, null, 4);
  }

  /**
   * test
   */
  public test(data: boolean) {
    //console.log('codeMirror', data);
  }

}
