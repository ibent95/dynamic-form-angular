import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-publication-forms-advanced-configurations-form',
  templateUrl: './publication-forms-advanced-configurations-form.component.html',
  styleUrls: ['./publication-forms-advanced-configurations-form.component.scss']
})
export class PublicationFormsAdvancedConfigurationsFormComponent implements OnInit {

  formGroup!: FormGroup;

  @Input() selectOptions!: any;

  constructor(
    private parentFormGroup: FormGroupDirective,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup.form;
  }

}
