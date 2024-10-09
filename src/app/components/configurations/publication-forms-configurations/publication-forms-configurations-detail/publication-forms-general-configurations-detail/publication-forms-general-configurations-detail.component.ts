import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-publication-forms-general-configurations-detail',
  templateUrl: './publication-forms-general-configurations-detail.component.html',
  styles: ['']
})
export class PublicationFormsGeneralConfigurationsDetailComponent implements OnInit {

  @Input() data!: any;
  @Input() selectOptions!: any;
  @Input() positionMinValue: number = 0;

  constructor() { }

  ngOnInit(): void { }

}
