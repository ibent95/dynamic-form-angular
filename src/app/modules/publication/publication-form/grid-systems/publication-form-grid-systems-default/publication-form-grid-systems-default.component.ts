import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, UntypedFormArray } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-publication-form-grid-systems-default',
  templateUrl: './publication-form-grid-systems-default.component.html',
  styleUrls: ['./publication-form-grid-systems-default.component.scss']
})
export class PublicationFormGridSystemsDefaultComponent {

  @Input() available!: any;
  @Input() forms!: FormGroup;
  @Input() selectOptions!: any;
  @Input() forms_metadata!: Array<any>;
  @Input() uniqueFalseCheckField!: any;

  @Output() onPublicationTypeSelected: EventEmitter<any>;

  formGroup!: FormGroup;
  publicationTypeUuid!: string;
  publicationTypeCode!: string;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
  }

  // Function to get Form Group of formBuilder
  public getFormGroup(fieldName: string) {
    return this.forms?.get(fieldName) as UntypedFormArray;
  }

  public onPublicationTypeSlctSelect(data: any) {

  }

}
