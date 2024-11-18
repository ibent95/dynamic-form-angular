import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { SelectOptionsInterface } from '../publication-forms-configurations-form.component';

@Component({
  selector: 'app-publication-forms-initial-configurations-form',
  templateUrl: './publication-forms-initial-configurations-form.component.html',
  styleUrls: ['./publication-forms-initial-configurations-form.component.scss']
})
export class PublicationFormsInitialConfigurationsFormComponent implements OnInit, OnChanges {

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

  constructor(
    private parentFormGroup: FormGroupDirective,
    private ref: ChangeDetectorRef,
  ) { }

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
