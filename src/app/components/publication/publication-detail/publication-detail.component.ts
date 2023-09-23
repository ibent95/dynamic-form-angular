import { Location, formatDate } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AppGeneralService } from 'src/app/services/app-general.service';
import { AppFormStatus, AppService, AppServiceType } from 'src/app/services/app.service';
import { DFMetadata, DFDataService } from '../../shared/dynamic-form/dynamic-forms';
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.scss']
})
export class PublicationDetailComponent implements OnInit {

  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  formVersionCode!: string | null;

  // All forms metadata (full: form version and forms metadata)
  publicationFormMetadata!: any;

  // All forms metadata available only `field_name` (forms metadata)
  fieldInForms!: Array<any>;

  // All forms and user input in angular form bulder
  forms!: FormGroup;

  formStatus!: AppFormStatus;

  // All select`s options in forms
  selectOptions!: any;

  userData!: any;

  subscription$!: Subject<void>;

  defaultGridConfigs!: {
    rowsCols: Array<String>
  };

  dfMetadata!: DFMetadata | any;

  /**
   * Constructor and other functions before form`s metadata are load
   */

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appSvc: AppService,
    private generalSvc: AppGeneralService,
    private location: Location,
    private dialog: MatDialog,
    private dfDataSvc: DFDataService,
    private ref: ChangeDetectorRef,
    private bsModalSvc: BsModalService,
  ) { }

  ngOnInit(): void {
    this.initiateData();
  }

  private initiateData(): void {
    this.dfMetadata = {
      noData: true,
      isRawMetadataLoaded: false,
      isFormBuilderCreated: false,
      isFormTypeLoaded: false,
      isFormTypeSelected: false,
      isMetadataLoaded: false,
      isWizardsAvaliable: false,
      isStepperAvaliable: false,
      isInSaveProcess: false,
      isCancelButtonDisabled: false,
      isSubmitButtonDisabled: false,

      gridSystems: {
        type: 'default',
        cols: 12,
        config: {},
      },
      initialFields: [],
      usedFields: [],
      
      uniqueFalseCheckFields: null,

      wizardsCount: 0,
      currentDate: new Date(),
    };
    this.dfDataSvc.setMetadata(this.dfMetadata);

    this.publicationTypeCode = 'JUR-1';
    this.formVersionCode = 'JUR1-V1';

    this.fieldInForms = [];
    this.forms = new FormGroup({});

    this.selectOptions = {
      publication_type: {
        items: [],
        default_value: null
      }
    };

    this.userData = window.history?.state;

    this.subscription$ = new Subject<void>();

    this.setPublicationType({ value: this.userData.publication_type?.uuid });
  }

  // Event on select publication type
  public setPublicationType(eventData: any): void {

    /**
     * Different way when from ngx-select is eventData[0].data;
     */

    this.publicationTypeUuid = this.userData.publication_type.uuid || null;
    this.publicationTypeCode = this.userData.publication_type.publication_type_code || null;

    this.dfMetadata.isFormTypeSelected = true;
    this.dfMetadata.isMetadataLoaded = false;

    delete this.dfMetadata.noData;

    this.dfMetadata.gridSystems = {
      type: 'default',
      cols: 12,
      config: {},
    };
    this.dfMetadata.initialFields = [];
    this.dfMetadata.usedFields = [];

    this.getFormMetadata(this.publicationTypeCode);
  }

  // Function to get metadata of form`s configuration
  private getFormMetadata(publicationTypeCode: string, formVersionCode?: string): void {

    let params = '/' + this.userData?.uuid + '/form-meta-data';

    if (formVersionCode) params += '?form-version-code=' + formVersionCode;

    this.appSvc.listParams(AppServiceType.PUBLICATIONS, new HttpParams(), params).subscribe(response => {
      this.dfMetadata.initialFields = response['data'];

      // Set available.form_metadata_loaded if publicationFormMetadata.forms`s value is valid
      if (this.dfMetadata.initialFields.forms) this.dfMetadata.isMetadataLoaded = false;

      // Check and set available.form_metadata_no_data if form meta data value is empty or not
      this.dfMetadata.noData = (
        (typeof this.dfMetadata.initialFields !== 'object') ||
        (
          (typeof this.dfMetadata.initialFields === 'object') &&
          (
            Array.isArray(this.dfMetadata.initialFields?.forms) &&
            (this.dfMetadata.initialFields?.forms.length === 0)
          )
        )
      );

      // Set grid system configuration
      this.dfMetadata.gridSystems = this.dfMetadata.initialFields.grid_system;

      this.setFieldsByAttribute('field_name', this.dfMetadata.initialFields.forms);
    });
  }

  // Recursive function to set field data (from backend: metadata) to flat array, also set other necessary settings (disable field, hidden field, params in endpoint for select)
  private setFieldsByAttribute(attribute: string, array: Array<any>) {
    let i = 0;

    array.forEach((element: any) => {
      if (element.hasOwnProperty(attribute) && element[attribute]) {

        // Set custom code here
        this.fieldInForms?.push(element);
      }

      if ((element.field_type === 'wizard' || element.field_type === 'stepper') && (element.children.length > 0)) {
        this.dfMetadata.wizards?.push({
          field_label: element.field_label,
          step: i,
          active: (i === 0)
        });
        i++;
      }

      if (element.field_type === 'select' || element.field_type === 'autoselect' || element.field_type === 'autocomplete' || element.field_type === 'multiple_select' || element.field_type === 'multiple_autoselect') {
        this.selectOptions[element.field_name] = {
          items: element.children || [],
          defaultValue: element.default_value || [],
          formControl: new FormControl()
        };

      }

      if (element.field_type === 'panel_multiple' || element.field_type === 'multiple') {
        element.children.forEach((value: any, key: any) => {
          this.selectOptions[value.field_name] = {
            items: value.children,
            defaultValue: [],
            formControl: new FormControl()
          };

          // Set initial value for every select url params
          //if (value.field_type === 'select' || value.field_type === 'autoselect' || value.field_type === 'autocomplete' || value.field_type === 'multiple_select' || value.field_type === 'multiple_autoselect') { }
        });
      }

      if (
        (element.field_type !== 'panel_multiple' && element.field_type !== 'multiple') &&
        Array.isArray(element['children']) &&
        element['children'].length > 0
      ) {
        this.setFieldsByAttribute(attribute, element['children']);
      }
    });

    this.dfMetadata.usedFields = this.fieldInForms;
    this.dfMetadata.isMetadataLoaded = true;
  }

  /**
   * Functions, events or handlers before submit or cancel form
   */

  // Event on click back button
  public onBackButtonClick() {
    this.location.back();
  }

}
