import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService, AppServiceType } from 'src/app/service/app.service';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss']
})
export class PublicationFormComponent implements OnInit {

  available!: any;

  publicationTypeCode!: string;
  formVersionCode!: string | null;

  publicationFormMetadata!: Array<any>;
  forms!: FormGroup;

  selectOptions!: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appSvc: AppService,
  ) { }

  ngOnInit(): void {
    this.available = {
      form_metadata: false,
      form_builder: false,
      publication_type_selected: false,
      publication_form_metadata: false,
      wizard: false,
      wizard_count: 0,
    };

    this.publicationTypeCode = 'JUR-1';
    this.formVersionCode = 'V1-JUR-1'; // V1-JUR-1
    this.forms = new FormGroup({});

    this.selectOptions = {
      publication_type: {
        items: [],
        default_value: null
      }
    };

    this.initiateForm();
  }

  private getMasterdataPublicationType(): void {
    this.appSvc.list(AppServiceType.PUBLICATION_MASTERDATA_PUBLICATION_TYPE).subscribe(response => {
      this.selectOptions['publication_type'].items = response['data'];
    });
  }

  private initiateForm(): void {
    // Required masterdata
    this.getMasterdataPublicationType();

    this.forms = this.formBuilder.group({
      publication_type_code: null,
      publication_type_uuid: null,
    });

    this.available.form_builder = true;
  }

  public onPublicationTypeClick(eventData: any): void {
    const selectedData = eventData[0].data;
    this.publicationTypeCode = selectedData['publication_type_code'];

    this.available.publication_type_selected = true;
    this.available.form_metadata = false;

    this.getFormMetadata(this.publicationTypeCode);
  }

  private getFormMetadata(publicationTypeCode: string, formVersionCode?: string): void {
    let params = '/' + publicationTypeCode;

    if (formVersionCode) params += '?form-version-code=' + formVersionCode;

    this.appSvc.listParam(AppServiceType.PUBLICATION_FORM_METADATA, params).subscribe(response => {
      this.publicationFormMetadata = response['data'];
      this.available.form_metadata = true;
    });
  }



}