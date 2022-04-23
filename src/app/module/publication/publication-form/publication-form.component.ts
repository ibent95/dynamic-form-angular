import { Location } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { LuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS } from "@angular/material-luxon-adapter";
import { Router } from '@angular/router';
import { Subject, takeUntil } from "rxjs";
import { AppService, AppServiceType, LOCAL_DATE_FORMATS, LUXON_DATE_FORMATS } from 'src/app/service/app.service';

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

  available!: any;

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
  ) { }

  ngOnInit(): void {
    this.available = {
      form_metadata_loaded: false,
      form_builder: false,
      publication_type_loaded: false,
      publication_type_selected: false,
      publication_form_metadata_loaded: false,
      wizard_avaliable: false,
      wizard_count: 0,
      wizards: [],
      current_date: new Date(),
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

  private getMasterdataPublicationType(): void {
    this.appSvc.list(AppServiceType.PUBLICATION_MASTERDATA_PUBLICATION_TYPE).subscribe(response => {
      this.selectOptions['publication_type'].items = response['data'];
      this.available.publication_type_loaded = true;

      this.forms.get('publication_type_code')?.setValue('BOK-1');
      this.forms.get('publication_type_uuid')?.setValue('a23892cd-6811-44bd-a671-c85b87829887a');
      this.onPublicationTypeClick({ value: 'a23892cd-6811-44bd-a671-c85b87829887' });
    });
  }

  private initiateForm(): void {
    // Required masterdata

    this.forms = this.formBuilder.group({
      publication_type_code: null,
      publication_type_uuid: null,
    });

    this.getMasterdataPublicationType();
    this.available.form_builder = true;
  }

  public onPublicationTypeClick(eventData: any): void {

    //const selectedData = eventData[0].data; // From ngx-select
    console.log('onPublicationTypeClick eventData', eventData);

    const selectedData = this.selectOptions['publication_type'].items.find((item: any) => item.uuid === eventData.value);
    this.publicationTypeUuid = selectedData['uuid'] || null;
    this.publicationTypeCode = selectedData['publication_type_code'] || null;

    this.available.publication_type_selected = true;
    this.available.form_metadata_loaded = false;

    this.getFormMetadata(this.publicationTypeCode);
  }

  private getFormMetadata(publicationTypeCode: string, formVersionCode?: string): void {
    let params = '/' + publicationTypeCode;

    if (formVersionCode) params += '?form-version-code=' + formVersionCode;

    this.appSvc.listParam(AppServiceType.PUBLICATION_FORM_METADATA, params).subscribe(response => {
      this.publicationFormMetadata = response['data'];
      this.available.form_metadata_loaded = true;

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

  // Handling to set value in forms (in Form Create and Update)
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

    //console.log('forms', this.forms);

    //this.setInitialFieldDependencyConfig();
    this.subscribeToFormsChanges();
  }

  private subscribeToFormsChanges() {
    this.forms.statusChanges.pipe(takeUntil(this.subscription$)).subscribe(() => {
      //this.statusSvc.addEditMode = true;
      console.log('statusChanges', this.forms.value);
    });
  }

  public get forms_metadata(): Array<any> {
    return this.publicationFormMetadata.forms;
  }

  public getFieldControl(fieldName: string) {
    return this.forms?.get(fieldName) as FormControl;
  }

  public getFormGroupControls(fieldName: string) {
    return this.forms?.get(fieldName) as FormArray;
  }

  /**
   * Functions, events or handlers after form`s metadata are load
   */


}