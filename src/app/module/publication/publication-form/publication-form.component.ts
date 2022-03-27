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

  publicationTypeCode!: string;
  formVersionCode!: string | null;

  publicationFormMetadata!: Array<any>;

  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appSvc: AppService,
  ) { }

  ngOnInit(): void {
    this.publicationTypeCode = 'JUR-1';
    this.formVersionCode = 'V1-JUR-1'; // V1-JUR-1
    this.form = new FormGroup({});

    this.getFormMetadata();
    this.initiateForm();
  }

  private getFormMetadata() {
    let params = '/' + this.publicationTypeCode;

    if (this.formVersionCode) params += '?form-version-code=' + this.formVersionCode;

    this.appSvc.listParam(AppServiceType.PUBLICATION_FORM_METADATA, params).subscribe(response => {
      this.publicationFormMetadata = response['data'];
    });
  }

  private initiateForm() {
    this.form = this.formBuilder.group({});
  }

}