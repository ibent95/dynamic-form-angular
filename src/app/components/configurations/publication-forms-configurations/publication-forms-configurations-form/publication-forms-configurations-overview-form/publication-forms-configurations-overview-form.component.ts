import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-publication-forms-configurations-overview-form',
  templateUrl: './publication-forms-configurations-overview-form.component.html',
  styleUrls: ['./publication-forms-configurations-overview-form.component.scss']
})
export class PublicationFormsConfigurationsOverviewFormComponent implements OnInit {

  @Input() initialForm!: FormGroup;
  @Input() generalForm!: FormGroup;
  @Input() advancedForm!: FormGroup;

  @Input() selectOptions!: any;

  acceptTermsConditions!: boolean;

  constructor() {
    this.acceptTermsConditions = false;
  }

  ngOnInit(): void { }

}
