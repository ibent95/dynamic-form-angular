import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { SelectOptionsInterface } from '../publication-forms-configurations-form.component';

@Component({
  selector: 'app-publication-forms-initial-configurations-form',
  templateUrl: './publication-forms-initial-configurations-form.component.html',
  styleUrls: ['./publication-forms-initial-configurations-form.component.scss']
})
export class PublicationFormsInitialConfigurationsFormComponent implements OnInit {

  formGroup!: FormGroup;

  @Input() selectOptions!: SelectOptionsInterface;

  selectedFormVersion: any;
  selectedFormVersionLoading: boolean = true;
  selectedFieldType: any;
  selectedFieldTypeLoading: boolean = true;
  selectedParentForm: any;
  selectedParentFormLoading: boolean = true;

  @Output() onPublicationFormVersionChange: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() onPublicationFieldTypeChange: EventEmitter<any> = new EventEmitter<any>(true);

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
    }

    if (formFieldTypeValue) {
      this.selectedFieldType = this.selectOptions.fieldTypes?.find((item: any) => item.dynamic_form_field_type_code === formFieldTypeValue);
    }

    if (formParentValue) {
      this.selectedParentForm = this.selectOptions.forms?.find((item: any) => item.uuid === formParentValue);
    }

    this.ref.detectChanges();
  }

  public onFormVersionChange(data: any) {
    this.selectedFormVersionLoading = true;
    this.selectedFormVersion = data;

    this.selectedFormVersionLoading = false;
    this.onPublicationFormVersionChange.next(data);
  }

  public onFieldTypeChange(data: any) {
    this.selectedFieldTypeLoading = true;
    this.selectedFieldType = data;

    this.selectedFieldTypeLoading = false;
    this.onPublicationFieldTypeChange.next(data);
  }

  public onParentFormChange(data: any) {
    this.selectedParentForm = data;
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
