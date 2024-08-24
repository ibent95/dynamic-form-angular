import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-publication-forms-initial-configurations-form',
  templateUrl: './publication-forms-initial-configurations-form.component.html',
  styleUrls: ['./publication-forms-initial-configurations-form.component.scss']
})
export class PublicationFormsInitialConfigurationsFormComponent implements OnInit {

  formGroup!: FormGroup;

  @Input() selectOptions!: any;

  selectedFormVersion: any;
  selectedFieldType: any;
  selectedParentForm: any;

  constructor(
    private parentFormGroup: FormGroupDirective,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup.form;
  }

  public onFormVersionChange(data: any) {
    this.selectedFormVersion = data;
  }

  public onFieldTypeChange(data: any) {
    this.selectedFieldType = data;
  }

  public onParentFormChange(data: any) {
    this.selectedParentForm = data;
  }

  public jsonParse(data: string): any {
    return JSON.parse(data);
  }

}
