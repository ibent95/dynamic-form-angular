import { Location } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, UntypedFormArray } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-publication-form-grid-systems-default',
  templateUrl: './publication-form-grid-systems-default.component.html',
  styleUrls: ['./publication-form-grid-systems-default.component.scss']
})
export class PublicationFormGridSystemsDefaultComponent implements OnInit {

  @Input() available!: any;
  @Input() selectOptions!: any;
  @Input() forms_metadata!: Array<any>;
  @Input() uniqueFalseCheckField!: any;

  @Output() onPublicationTypeSelected!: EventEmitter<any>;
  @Output() onFormCancelButtonClicked!: EventEmitter<any>;
  @Output() onFormSubmitButtonClicked!: EventEmitter<any>;

  forms!: FormGroup;
  publicationTypeUuid!: string;
  publicationTypeCode!: string;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
    private location: Location,
  ) {
    this.forms = this.parentFormGroup.form as FormGroup;
    this.onPublicationTypeSelected = new EventEmitter<any>(true);
    this.onFormCancelButtonClicked = new EventEmitter<any>(true);
    this.onFormSubmitButtonClicked = new EventEmitter<any>(true);
  }

  public ngOnInit(): void { }

  // Function to get Form Group of formBuilder
  public getFormGroup(fieldName: string) {
    return this.forms?.get(fieldName) as UntypedFormArray;
  }

  public onPublicationTypeSlctSelect(data: any) {
    this.onPublicationTypeSelected.emit(data);
  }

  public onFormCancelButtonClick() {
    this.onFormCancelButtonClicked.emit(true);
  }

  public onFormSubmitButtonClick() {
    this.onFormSubmitButtonClicked.emit(true);
  }

  public onBackButtonClick() {
    this.location.back();
  }

}
