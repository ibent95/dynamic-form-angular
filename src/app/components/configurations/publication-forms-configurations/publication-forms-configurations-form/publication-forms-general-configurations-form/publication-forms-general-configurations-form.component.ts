import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-publication-forms-general-configurations-form',
  templateUrl: './publication-forms-general-configurations-form.component.html',
  styleUrls: ['./publication-forms-general-configurations-form.component.scss']
})
export class PublicationFormsGeneralConfigurationsFormComponent implements OnInit {

  formGroup!: FormGroup;

  @Input() selectOptions!: any;

  constructor(
    private parentFormGroup: FormGroupDirective,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup.form;
  }

}
