import { Location } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { LuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS } from "@angular/material-luxon-adapter";
import { Router } from '@angular/router';
import { Subject, takeUntil } from "rxjs";
import { AppService, AppServiceType, LUXON_DATE_FORMATS } from 'src/app/service/app.service';
import { MatDialog } from "@angular/material/dialog";
import { DialogConfirmComponent } from "src/app/shared/dialog-confirm/dialog-confirm.component";

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: LuxonDateAdapter, deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: LUXON_DATE_FORMATS },
  ]
})
export class PublicationFormComponent implements OnInit {

  available!: any | {
    no_data: boolean,
    form_metadata_no_data: boolean,
    form_metadata_loaded: boolean,
    form_builder: boolean,
    publication_type_loaded: boolean,
    publication_type_selected: boolean,
    publication_form_metadata_loaded: boolean,
    grid_system: {
      type: 'material' | 'bootstrap' | 'tailwind' | 'no_grid_system',
      cols: number,
      config: object
    } ,
    wizard_avaliable: boolean,
    wizard_count: number,
    wizards: Array<any>,
    current_date: Date,
    cancel_button_disabled: boolean,
    submit_button_disabled: boolean,
  };

  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  formVersionCode!: string | null;

  // All forms metadata (full: form version and forms metadata)
  publicationFormMetadata!: any;

  // All forms metadata available only `field_name` (forms metadata)
  fieldInForms!: Array<any>;

  // All forms and user input in angular form bulder
  forms!: FormGroup;

  // All select`s options in forms
  selectOptions!: any;

  // All hidden fields in forms
  hiddenFields!: any;

  // All disabled fields in forms
  disabledFields!: any;

  // All disabled fields in forms
  selectURLParameters!: any;

  // All unique fields in forms
  uniqueFalseCheckField!: any;

  userData!: any;

  subscription$!: Subject<void>;

  /**
   * Constructor and other functions before form`s metadata are load
   */

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appSvc: AppService,
    private location: Location,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.available = {
      form_metadata_loaded: false,
      form_builder: false,
      publication_type_loaded: false,
      publication_type_selected: false,
      publication_form_metadata_loaded: false,
      grid_system: {
        type: 'no_grid_system',
        cols: 12,
        config: {},
      },
      wizard_avaliable: false,
      wizard_count: 0,
      wizards: [],
      current_date: new Date(),
      cancel_button_disabled: false,
      submit_button_disabled: false,
    };

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

    this.hiddenFields = {};
    this.disabledFields = {};
    this.selectURLParameters = {};
    this.uniqueFalseCheckField = {};

    this.userData = {};
    this.subscription$ = new Subject<void>();

    this.initiateForm();

    const CONST_A: any = { "pattern": "^(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})" };

    const CONST_B: any = {"panel_description":{"mat_icon":"signal_cellular_alt_2_bar"}};

  }

  // Initial function for build form
  private initiateForm(): void {
    // Required masterdata

    this.forms = this.formBuilder.group({
      publication_type_code: null,
      publication_type_uuid: null,
    });

    this.getMasterdataPublicationType();
    this.available.form_builder = true;
  }

  // Function to get publication type
  private getMasterdataPublicationType(): void {
    this.appSvc.list(AppServiceType.PUBLICATION_MASTERDATA_PUBLICATION_TYPE).subscribe(response => {
      this.selectOptions['publication_type'].items = response['data'];
      this.available.publication_type_loaded = true;

      this.forms.get('publication_type_code')?.setValue('BOK-1');
      this.forms.get('publication_type_uuid')?.setValue('a23892cd-6811-44bd-a671-c85b87829887a');
      this.onPublicationTypeSlctSelect({ value: 'a23892cd-6811-44bd-a671-c85b87829887' });
    });
  }

  // Event on select publication type
  public onPublicationTypeSlctSelect(eventData: any): void {

    //const selectedData = eventData[0].data; // From ngx-select

    const selectedData = this.selectOptions['publication_type'].items.find((item: any) => item.uuid === eventData.value);
    this.publicationTypeUuid = selectedData['uuid'] || null;
    this.publicationTypeCode = selectedData['publication_type_code'] || null;

    this.available.publication_type_selected = true;
    this.available.form_metadata_loaded = false;

    delete this.available.no_data;
    delete this.available.form_metadata_no_data;

    this.available.grid_system = {
      type: 'no_grid_system',
      cols: 12,
      config: {},
    };

    this.getFormMetadata(this.publicationTypeCode);
  }

  // Function to get metadata of form`s configuration
  private getFormMetadata(publicationTypeCode: string, formVersionCode?: string): void {
    let params = '/' + publicationTypeCode;

    if (formVersionCode) params += '?form-version-code=' + formVersionCode;

    this.appSvc.listParam(AppServiceType.PUBLICATION_FORM_METADATA, params).subscribe(response => {
      this.publicationFormMetadata = response['data'];

      // Set available.form_metadata_loaded if publicationFormMetadata.forms`s value is valid
      if (this.publicationFormMetadata.forms) this.available.form_metadata_loaded = true;

      // Check and set available.form_metadata_no_data if form meta data value is empty or not
      this.available.form_metadata_no_data = (
        (typeof this.publicationFormMetadata !== 'object') ||
        (
          (typeof this.publicationFormMetadata === 'object') &&
          (Array.isArray(this.publicationFormMetadata.forms) && (this.publicationFormMetadata.forms.length === 0))
        )
      );

      // Set grid system configuration
      this.available.grid_system = this.publicationFormMetadata.grid_system;

      this.setFieldsByAttribute('field_name', this.publicationFormMetadata.forms);

      this.setDynamicFormValues(this.publicationTypeUuid, this.publicationTypeCode);
    });
  }

  // Recursive function to set field data (from backend: metadata) to flat array, also set other necessary settings (disable field, hidden field, params in endpoint for select)
  private setFieldsByAttribute(attribute: string, array: Array<any>) {
    let i = 0;

    array.forEach((element: any) => {
      if (element.hasOwnProperty(attribute) && element[attribute]) {

        // Set custom code here

        this.fieldInForms?.push(element);

        // Set hidden and disabled config
        this.hiddenFields[element.field_name] = false;
        this.disabledFields[element.field_name] = false;
      }

      if (element.field_type === 'wizard' && (element.children.length > 0)) {
        this.available.wizards.push({
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

        this.selectURLParameters[element.field_name] = '';
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

          // Set hidden and disabled config
          if (value[attribute]) {
            this.hiddenFields[value.field_name] = false;
            this.disabledFields[value.field_name] = false;
          }
        });
      }

      if ((element.field_type !== 'panel_multiple' && element.field_type !== 'multiple') && Array.isArray(element['children']) && element['children'].length > 0) {
        this.setFieldsByAttribute(attribute, element['children']);
      }
    });
  }

  // Function to set value in forms (in Form Create and Update)
  private setDynamicFormValues(publicationTypeUuid: string, publicationTypeCode: string) {
    let fieldDataSets: any = {};

    fieldDataSets['publication_type_uuid'] = publicationTypeUuid;
    fieldDataSets['publication_type_code'] = publicationTypeCode;

    this.fieldInForms.forEach((element: any) => {

      if (element.field_type === 'url') {
        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = [this.userData[element.field_name] || '', [Validators.pattern(element.validation_config?.pattern || "^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})")]];

      } else if (element.field_type === 'radio') {
        this.selectURLParameters[element.field_name] = '';

        this.selectOptions[element.field_name] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name + '_options'] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };

        fieldDataSets['uuid_' + element.field_name] = [this.userData['uuid_' + element.field_name] || (element.default_value || '')];

      } else if (element.field_type === 'select') {
        this.selectURLParameters[element.field_name] = '';

        this.selectOptions[element.field_name] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name + '_options'] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };

        fieldDataSets[element.field_name] = [this.userData[element.field_name] || (element.default_value || '')];

        //if ((element.default_value) && ((element.default_value !== []) || (element.default_value !== ''))) this.onSelect(element.default_value, element.field_type, element.field_name, element.dependency_child, element.dependency_parent);

      } else if (element.field_type === 'autoselect') {
        this.selectURLParameters[element.field_name] = '';

        this.selectOptions[element.field_name] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name + '_options'] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };

        if (this.userData['uuid_' + element.field_name]) {
          fieldDataSets[element.field_name + '_options'].items = [{ option_text_field: this.userData[element.field_name], uuid: this.userData['uuid_' + element.field_name], }].concat(fieldDataSets[element.field_name + '_options'].items);

          this.selectOptions[element.field_name].items = fieldDataSets[element.field_name + '_options'].items;
        }

        fieldDataSets[element.field_name] = [this.userData[element.field_name] || (element.default_value || '')];

      } else if (element.field_type === 'autocomplete') {
        this.selectURLParameters[element.field_name] = '';

        this.selectOptions[element.field_name] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        //if (this.userData[element.field_name]) this.onType(this.userData[element.field_name], element.field_type, element.field_name, element.dependency_child, element.dependency_parent, element.uuid_form);

        fieldDataSets[element.field_name + '_options'] = this.selectOptions[element.field_name];
        fieldDataSets[element.field_name] = [this.userData[element.field_name] || ''];
        fieldDataSets['uuid_' + element.field_name] = [this.userData['uuid_' + element.field_name] || ''];

      } else if (element.field_type === 'multiple_select') {
        let multiple_select = [];

        this.selectURLParameters[element.field_name] = '';

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name + '_options'] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };

        if (this.userData[element.field_name] && this.userData[element.field_name].length > 0) {
          multiple_select = this.userData[element.field_name].map((apiData: any) => {
            return apiData['uuid'];
          });
        }

        this.selectOptions[element.field_name].defaultValue = multiple_select;

        fieldDataSets[element.field_name] = [multiple_select];

      } else if (element.field_type === 'multiple_autoselect') {
        let multiple_autoselect = [];

        this.selectURLParameters[element.field_name] = '';

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        this.selectOptions[element.field_name].defaultValue = "";

        fieldDataSets[element.field_name + '_options'] = {
          items: element.options || [],
          defaultValue: element.default_value || [],
        };
        //fieldDataSets[element.field_name] = (this.userData[element.field_name]) ? [this.userData[element.field_name].map(item => { return item.uuid; })] : [];

        if (this.userData[element.field_name] && this.userData[element.field_name].length > 0) {
          fieldDataSets[element.field_name + '_options'].items = this.userData[element.field_name].map((item: any) => {
            return {
              option_text_field: item.value,
              uuid: item.uuid,
            };
          }).concat(fieldDataSets[element.field_name + '_options'].items);

          multiple_autoselect = this.userData[element.field_name].map((apiData: any) => {
            return apiData['uuid'];
          });
        }

        this.available[element.field_name] = (this.userData[element.field_name]) ? [this.userData[element.field_name].map((item: any) => { return item.uuid; })] : [];

        fieldDataSets[element.field_name] = [multiple_autoselect];

      } else if (element.field_type === 'checkbox') {
        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = [(this.userData[element.field_name] || this.userData[element.field_name] === '1') || false];

      } else if (element.field_type === 'file') {
        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = [this.userData[element.field_name] || ''];
      } else if (element.field_type === 'image') {
        // If the url is valid or exists, run the image service to get the base64 value, otherwise the default value is empty string
        const self = this;

        //this.available[element.field_name] = IMAGE_PLACEHOLDER;

        //if (this.userData && this.userData.hasOwnProperty(element.field_name) && this.userData[element.field_name] && this.userData.hasOwnProperty(element.field_name + '_url_file') && this.userData[element.field_name + '_url_file']) this.imageSvc.imageBase64fromUrl(this.userData[element.field_name + '_url_file'], function (base64) {
        //  self.available[element.field_name] = base64;
        //});

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = [this.userData[element.field_name] || ''];

      } else if (element.field_type === 'date' || element.field_type === 'month' || element.field_type === 'year') {

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = (this.userData[element.field_name]) ? new Date(this.userData[element.field_name]) : '';

      } else if (element.field_type === 'time') {

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = (this.userData[element.field_name]) ? new Date(this.userData[element.field_name]) : '';

      } else if (element.field_type === 'owl-date' || element.field_type === 'owl-month' || element.field_type === 'owl-year' || element.field_type === 'owl-time' || element.field_type === 'owl-datetime') {

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = (this.userData[element.field_name]) ? new Date(this.userData[element.field_name]) : '';

      } else if (element.field_type === 'multiple' || element.field_type === 'multiple_panel') {
        let multipleGroup: Array<any> = [];

        this.selectURLParameters[element.field_name] = [];
        this.selectOptions[element.field_name] = [];
        this.available[element.field_name] = [];
        this.uniqueFalseCheckField[element.field_name] = [];

        if (this.userData[element.field_name]) {
          if (this.userData[element.field_name].length) {
            this.userData[element.field_name].forEach((apiData: any, index: number) => {
              //multipleGroup.push(this.doCreateMultipleItem(element.field_name, element.children, index, apiData));
            })
            fieldDataSets[element.field_name] = this.formBuilder.array(multipleGroup);
          }
        } else {
          //fieldDataSets[element.field_name] = this.formBuilder.array([this.doCreateMultipleItem(element.field_name, element.children, multipleGroup.length)]);
        }

      } else if (element.field_type === 'number') {

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = [this.userData[element.field_name] || '', [Validators.min(element.validation_config?.min || 0), Validators.pattern(element.validation_config?.pattern || '^[0-9]*$')]];

      } else if (element.field_type === 'mask_full_time') {
        this.available[element.field_name] = this.userData[element.field_name] || '';

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = [this.userData[element.field_name] || ''];

      } else if (element.field_type === 'mask') {
        this.available[element.field_name] = this.userData[element.field_name] || '';

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = [this.userData[element.field_name] || ''];

      } else {

        this.uniqueFalseCheckField[element.field_name] = {
          'value': false,
          'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
        };

        fieldDataSets[element.field_name] = (element.validation_config?.pattern) ? ([this.userData[element.field_name] || '', [Validators.pattern(element.validation_config.pattern)]]) : ([this.userData[element.field_name] || '']);

      }

    });

    this.forms = this.formBuilder.group(fieldDataSets);

    let materialGridConfig = {
      type: "material",
      cols: 12,
      config: {
        text_1: { colspan: 3, rowspan: 1 },
        select_1: { colspan: 3, rowspan: 1 },

        try_stepper_1: { colspan: 6, rowspan: 12 },

        try_stepper_1_step_1: { colspan: 12, rowspan: 1 },
        date_2: { colspan: 6, rowspan: 1 },
        month_2: { colspan: 6, rowspan: 1 },
        year_2: { colspan: 6, rowspan: 1 },
        time_1: { colspan: 6, rowspan: 1 },
        datetime_1: { colspan: 6, rowspan: 1 },
        daterange_1: { colspan: 6, rowspan: 1 },
        timerange_1: { colspan: 6, rowspan: 1 },
        datetimerange_1: { colspan: 6, rowspan: 1 },

        try_stepper_1_step_2: { colspan: 12, rowspan: 1 },
        text_2: { colspan: 6, rowspan: 1 },
        url_1: { colspan: 6, rowspan: 1 },
        select_2: { colspan: 6, rowspan: 1 },
        date_1: { colspan: 6, rowspan: 1 },
        month_1: { colspan: 6, rowspan: 1 },
        year_1: { colspan: 6, rowspan: 1 },

        try_stepper_1_step_3: { colspan: 12, rowspan: 1 },
        select_3: { colspan: 6, rowspan: 1 },
        select_4: { colspan: 6, rowspan: 1 },
        select_5: { colspan: 6, rowspan: 1 },
        number_1: { colspan: 6, rowspan: 1 },

        url_2: { colspan: 4, rowspan: 1 },
        number_2: { colspan: 3, rowspan: 1 },

        try_accordion_1: { colspan: 6, rowspan: 12 },

        try_accordion_1_panel_1: { colspan: 12, rowspan: 1 },
        text_3: { colspan: 4, rowspan: 1 },
        url_3: { colspan: 4, rowspan: 1 },
        number_3: { colspan: 4, rowspan: 1 },

        try_accordion_1_panel_2: { colspan: 12, rowspan: 1 },
        select_6: { colspan: 4, rowspan: 1 },
        select_7: { colspan: 4, rowspan: 1 },

        try_accordion_1_panel_3: { colspan: 12, rowspan: 1 },
        select_8: { colspan: 4, rowspan: 1 },
        select_9: { colspan: 4, rowspan: 1 },
      },
    };

    let bootstrapGridConfig = {
      type: "bootstrap",
      cols: "row-cols-12",
      config: {
        text_1: { col: "col-3" },
        select_1: { col: "col-3" },

        try_stepper_1: { col: "col-62" },

        try_stepper_1_step_1: { col: "col-12" },
        date_2: { col: "col-6" },
        month_2: { col: "col-6" },
        year_2: { col: "col-6" },
        time_1: { col: "col-6" },
        datetime_1: { col: "col-6" },
        daterange_1: { col: "col-6" },
        timerange_1: { col: "col-6" },
        datetimerange_1: { col: "col-6" },

        try_stepper_1_step_2: { col: "col-12" },
        text_2: { col: "col-6" },
        url_1: { col: "col-6" },
        select_2: { col: "col-6" },
        date_1: { col: "col-6" },
        month_1: { col: "col-6" },
        year_1: { col: "col-6" },

        try_stepper_1_step_3: { col: "col-12" },
        select_3: { col: "col-6" },
        select_4: { col: "col-6" },
        select_5: { col: "col-6" },
        number_1: { col: "col-6" },

        url_2: { col: "col-4" },
        number_2: { col: "col-3" },

        try_accordion_1: { col: "col-12" },

        try_accordion_1_panel_1: { col: "col-12" },
        text_3: { col: "col-4" },
        url_3: { col: "col-4" },
        number_3: { col: "col-4" },

        try_accordion_1_panel_2: { col: "col-12" },
        select_6: { col: "col-4" },
        select_7: { col: "col-4" },

        try_accordion_1_panel_3: { col: "col-12" },
        select_8: { col: "col-4" },
        select_9: { col: "col-4" },
      },
    };

    let tailwindGridConfig = {
      type: "tailwind",
      cols: "grid-cols-12",
      config: {
        text_1: { col: "col-span-3", row: "col-span-1" },
        select_1: { col: "col-span-3", row: "col-span-1" },

        try_stepper_1: { col: "col-span-62", row: "col-span-16" },

        try_stepper_1_step_1: { col: "col-span-12", row: "col-span-1" },
        date_2: { col: "col-span-6", row: "col-span-1" },
        month_2: { col: "col-span-6", row: "col-span-1" },
        year_2: { col: "col-span-6", row: "col-span-1" },
        time_1: { col: "col-span-6", row: "col-span-1" },
        datetime_1: { col: "col-span-6", row: "col-span-1" },
        daterange_1: { col: "col-span-6", row: "col-span-1" },
        timerange_1: { col: "col-span-6", row: "col-span-1" },
        datetimerange_1: { col: "col-span-6", row: "col-span-1" },

        try_stepper_1_step_2: { col: "col-span-12", row: "col-span-1" },
        text_2: { col: "col-span-6", row: "col-span-1" },
        url_1: { col: "col-span-6", row: "col-span-1" },
        select_2: { col: "col-span-6", row: "col-span-1" },
        date_1: { col: "col-span-6", row: "col-span-1" },
        month_1: { col: "col-span-6", row: "col-span-1" },
        year_1: { col: "col-span-6", row: "col-span-1" },

        try_stepper_1_step_3: { col: "col-span-12", row: "col-span-1" },
        select_3: { col: "col-span-6", row: "col-span-1" },
        select_4: { col: "col-span-6", row: "col-span-1" },
        select_5: { col: "col-span-6", row: "col-span-1" },
        number_1: { col: "col-span-6", row: "col-span-1" },

        url_2: { col: "col-span-4", row: "col-span-1" },
        number_2: { col: "col-span-3", row: "col-span-1" },

        try_accordion_1: { col: "col-span-12", row: "col-span-1" },

        try_accordion_1_panel_1: { col: "col-span-12", row: "col-span-1" },
        text_3: { col: "col-span-4", row: "col-span-1" },
        url_3: { col: "col-span-4", row: "col-span-1" },
        number_3: { col: "col-span-4", row: "col-span-1" },

        try_accordion_1_panel_2: { col: "col-span-12", row: "col-span-1" },
        select_6: { col: "col-span-4", row: "col-span-1" },
        select_7: { col: "col-span-4", row: "col-span-1" },

        try_accordion_1_panel_3: { col: "col-span-12", row: "col-span-1" },
        select_8: { col: "col-span-4", row: "col-span-1" },
        select_9: { col: "col-span-4", row: "col-span-1" },
      },
    };

    //this.setInitialFieldDependencyConfig();
    this.subscribeToFormsChanges();
  }

  // Function for check changes of form
  private subscribeToFormsChanges() {
    this.forms.statusChanges.pipe(takeUntil(this.subscription$)).subscribe(() => {
      //this.statusSvc.addEditMode = true;
      console.log('statusChanges', this.forms.value);
    });
  }

  public get forms_metadata(): Array<any> {
    return this.publicationFormMetadata.forms;
  }

  // Function to get Form Control of formBuilder for custom component / child component (Shared component)
  public getFieldControl(fieldName: string) {
    return this.forms?.get(fieldName) as FormControl;
  }

  // Function to get Form Group of formBuilder
  public getFormGroup(fieldName: string) {
    return this.forms?.get(fieldName) as FormArray;
  }

  /**
   * Functions, events or handlers after form`s metadata are load
   */



  /**
   * Functions, events or handlers before submit or cancel form
   */

  // Event on click back button
  public onBackBtnClick() {
    this.location.back();
  }

  // Event on click cancel button
  public onFormCancelBtnClick() {
    this.available.submit_button_disabled = !!this.available.submit_button_disabled;

    // Dialog initial configuration and open
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      height: '280px',
      width: '600px',
      data: {
        title: 'Anda yakin ingin keluar?',
        content_message: 'Data yang anda masukan tidak akan disimpan.',
        no_button_label: 'Tidak',
        yes_button_label: 'Ya',
      }
    });

    // Subscribe to dialog closed event
    dialogRef.afterClosed().subscribe(response => {

      if (response.result) { // If user`s choice is yes, set location`s back
        this.location.back();

      } else { // Default handler, to set disable of submit button
        this.available.submit_button_disabled = !!this.available.submit_button_disabled;
      }
    });

    //const modal = this.modalSvc.show(ConfirmModalCustomComponent, { ignoreBackdropClick: true, class: MODAL.ALERT.WARNING, initialState: innitialState });
    //(<ConfirmModalCustomComponent>modal.content).onClose.subscribe(result => {
    //  if (result == 'terbit') {
    //    this.doSubmitForm('DRF');
    //  } else if (result == 'modal_closed') {
    //    this.location.back();
    //  } else {
    //    modal.hide();
    //  }
    //});
  }

  // Event on click submit button
  public onFormSubmitBtnClick() {
    console.log('onFormSubmitBtnClick');

    //const submitClick = { submitClick: true };
    //this.dataSvc.setData(submitClick);

    //const innitialState = {
    //  title: this.translateSvc.instant('Apakah ingin simpan ?'),
    //  message: this.translateSvc.instant('Anda dapat menyimpannya sebagai draft atau langsung terbitkan'),
    //  confirmBtnlabel: this.translateSvc.instant('Terbitkan'),
    //  draftBtnlabel: this.translateSvc.instant('Draft'),
    //  cancelBtnlabel: this.translateSvc.instant('Batal'),
    //};

    //const modal = this.modalSvc.show(ConfirmModalCustomComponent, { ignoreBackdropClick: true, class: MODAL.ALERT.WARNING, initialState: innitialState, });
    //(<ConfirmModalCustomComponent>modal.content).onClose.subscribe(result => {
    //  if (result) {
    //    const kd_status = (result === 'draft') ? 'DRF' : 'TRB';
    //    this.btnSubmit = true;
    //    this.doSubmitForm(kd_status);
    //  } else {
    //    this.btnSubmit = false;
    //    modal.hide();
    //  }
    //});
  }

}