// Angular and other libraries
import { LOCALE_ID, NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeId from "@angular/common/locales/id";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LuxonModule } from 'luxon-angular';
import { NgxSelectModule } from 'ngx-select-ex';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from '@danielmoncada/angular-datetime-picker';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

// App routings, settings, components
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { BootstrapModule } from './modules/bootstrap.module';
import { AppComponent } from './app.component';
import { CONFIG, ENV } from './app.config';
import { AppService } from './services/app.service';
import { AppGeneralService } from './services/app-general.service';

// App core components
import { CoreModule } from './core/core.module';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';
import { FooterComponent } from './core/footer/footer.component';

// App shared components
import { PageBlankComponent } from './components/shared/pages/page-blank/page-blank.component';
import { PageComponentsComponent } from './components/shared/pages/page-components/page-components.component';
import { PageNotFoundComponent } from './components/shared/pages/page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './components/shared/pages/page-under-construction/page-under-construction.component';
import { GhostTableComponent } from './components/shared/ghost-table/ghost-table.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

// App shared components (Custom material datetime pickers)
import { DatetimePickerComponent } from './components/shared/datetime-picker/datetime-picker.component';
import { DatePickerComponent } from './components/shared/datetime-picker/date-picker/date-picker.component';
import { MonthPickerComponent } from './components/shared/datetime-picker/month-picker/month-picker.component';
import { YearPickerComponent } from './components/shared/datetime-picker/year-picker/year-picker.component';
import { TimePickerComponent } from './components/shared/datetime-picker/time-picker/time-picker.component';
import { DateTimePickerComponent } from './components/shared/datetime-picker/date-time-picker/date-time-picker.component';

// App shared components (OWL datetime pickers)
import { OwlDatetimePickerComponent } from './components/shared/owl-datetime-picker/owl-datetime-picker.component';
import { OwlDatePickerComponent } from './components/shared/owl-datetime-picker/owl-date-picker/owl-date-picker.component';
import { OwlMonthPickerComponent } from './components/shared/owl-datetime-picker/owl-month-picker/owl-month-picker.component';
import { OwlYearPickerComponent } from './components/shared/owl-datetime-picker/owl-year-picker/owl-year-picker.component';
import { OwlTimePickerComponent } from './components/shared/owl-datetime-picker/owl-time-picker/owl-time-picker.component';
import { OwlDateTimePickerComponent } from './components/shared/owl-datetime-picker/owl-date-time-picker/owl-date-time-picker.component';
import { OwlDateRangePickerComponent } from './components/shared/owl-datetime-picker/owl-date-range-picker/owl-date-range-picker.component';
import { OwlTimeRangePickerComponent } from './components/shared/owl-datetime-picker/owl-time-range-picker/owl-time-range-picker.component';
import { OwlDateTimeRangePickerComponent } from './components/shared/owl-datetime-picker/owl-date-time-range-picker/owl-date-time-range-picker.component';

// App shared components (Dialogs)
import { DialogConfirmComponent } from './components/shared/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogAlertComponent } from './components/shared/dialogs/dialog-alert/dialog-alert.component';
import { DialogPromptComponent } from './components/shared/dialogs/dialog-prompt/dialog-prompt.component';

// App shared components (Bootstrap modals)
import { ModalConfirmComponent } from './components/shared/modals/modal-confirm/modal-confirm.component';
import { ModalAlertComponent } from './components/shared/modals/modal-alert/modal-alert.component';
import { ModalPromptComponent } from './components/shared/modals/modal-prompt/modal-prompt.component';

// App module / menu components
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';

// App module / menu components (Publication)
import { PublicationComponent } from './components/publication/publication.component';
import { PublicationFormComponent } from './components/publication/publication-form/publication-form.component';
import { PublicationFormGridSystemsDefaultComponent } from './components/publication/publication-form/grid-systems/publication-form-grid-systems-default/publication-form-grid-systems-default.component';
import { PublicationFormGridSystemsMaterialComponent } from './components/publication/publication-form/grid-systems/publication-form-grid-systems-material/publication-form-grid-systems-material.component';
import { PublicationFormGridSystemsBootstrapComponent } from './components/publication/publication-form/grid-systems/publication-form-grid-systems-bootstrap/publication-form-grid-systems-bootstrap.component';
import { PublicationFormGridSystemsTailwindComponent } from './components/publication/publication-form/grid-systems/publication-form-grid-systems-tailwind/publication-form-grid-systems-tailwind.component';
import { PublicationFormRecursiveComponent } from './components/publication/publication-form/publication-form-recursive/publication-form-recursive.component';
import { PublicationDetailComponent } from './components/publication/publication-detail/publication-detail.component';
import { PublicationDetailGridSystemsDefaultComponent } from './components/publication/publication-detail/grid-systems/publication-detail-grid-systems-default/publication-detail-grid-systems-default.component';
import { PublicationDetailGridSystemsMaterialComponent } from './components/publication/publication-detail/grid-systems/publication-detail-grid-systems-material/publication-detail-grid-systems-material.component';
import { PublicationDetailGridSystemsBootstrapComponent } from './components/publication/publication-detail/grid-systems/publication-detail-grid-systems-bootstrap/publication-detail-grid-systems-bootstrap.component';
import { PublicationDetailGridSystemsTailwindComponent } from './components/publication/publication-detail/grid-systems/publication-detail-grid-systems-tailwind/publication-detail-grid-systems-tailwind.component';
import { PublicationDetailRecursiveComponent } from './components/publication/publication-detail/publication-detail-recursive/publication-detail-recursive.component';
import { CustomModalPublicationRemoveConfirmComponent } from './components/publication/custom-modal-publication-remove-confirm/custom-modal-publication-remove-confirm.component';
import { CustomModalPublicationSubmitConfirmComponent } from './components/publication/publication-form/custom-modal-publication-submit-confirm/custom-modal-publication-submit-confirm.component';
import { CustomModalPublicationExitFormConfirmComponent } from './components/publication/publication-form/custom-modal-publication-exit-form-confirm/custom-modal-publication-exit-form-confirm.component';
import { CustomDialogPublicationRemoveConfirmComponent } from './components/publication/custom-dialog-publication-remove-confirm/custom-dialog-publication-remove-confirm.component';
import { CustomDialogPublicationSubmitConfirmComponent } from './components/publication/publication-form/custom-dialog-publication-submit-confirm/custom-dialog-publication-submit-confirm.component';
import { CustomDialogPublicationExitFormConfirmComponent } from './components/publication/publication-form/custom-dialog-publication-exit-form-confirm/custom-dialog-publication-exit-form-confirm.component';

// DynamicForm components
import { DynamicFormComponent } from './components/shared/dynamic-form/dynamic-form.component';
import { DFFieldTextComponent } from './components/shared/dynamic-form/df-field-text/df-field-text.component';
import { DFFieldNumberComponent } from './components/shared/dynamic-form/df-field-number/df-field-number.component';
import { DFFieldTextareaComponent } from './components/shared/dynamic-form/df-field-textarea/df-field-textarea.component';
import { DFFieldDateComponent } from './components/shared/dynamic-form/df-field-date/df-field-date.component';
import { DFFieldTimeComponent } from './components/shared/dynamic-form/df-field-time/df-field-time.component';
import { DFFieldDatetimeComponent } from './components/shared/dynamic-form/df-field-datetime/df-field-datetime.component';
import { DFFieldYearComponent } from './components/shared/dynamic-form/df-field-year/df-field-year.component';
import { DFFieldFileComponent } from './components/shared/dynamic-form/df-field-file/df-field-file.component';
import { DFFieldImageComponent } from './components/shared/dynamic-form/df-field-image/df-field-image.component';
import { DFFieldFileUploadComponent } from './components/shared/dynamic-form/df-field-file-upload/df-field-file-upload.component';
import { DFFieldImageUploadComponent } from './components/shared/dynamic-form/df-field-image-upload/df-field-image-upload.component';
import { DFFieldColorComponent } from './components/shared/dynamic-form/df-field-color/df-field-color.component';
import { DFFieldCheckboxComponent } from './components/shared/dynamic-form/df-field-checkbox/df-field-checkbox.component';
import { DFFieldRadioComponent } from './components/shared/dynamic-form/df-field-radio/df-field-radio.component';
import { DFFieldSliderComponent } from './components/shared/dynamic-form/df-field-slider/df-field-slider.component';
import { DFFieldSelectComponent } from './components/shared/dynamic-form/df-field-select/df-field-select.component';
import { DFFieldNGXSelectComponent } from './components/shared/dynamic-form/df-field-ngx-select/df-field-ngx-select.component';
import { DfFieldEmailComponent } from './components/shared/dynamic-form/df-field-email/df-field-email.component';
import { DfFieldTelComponent } from './components/shared/dynamic-form/df-field-tel/df-field-tel.component';
import { DfFieldUrlComponent } from './components/shared/dynamic-form/df-field-url/df-field-url.component';
import { DfFieldPasswordComponent } from './components/shared/dynamic-form/df-field-password/df-field-password.component';
import { DfFieldSearchComponent } from './components/shared/dynamic-form/df-field-search/df-field-search.component';
import { DFFieldMonthComponent } from './components/shared/dynamic-form/df-field-month/df-field-month.component';
import { DFFieldOwlDatetimeComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-datetime.component';
import { DFFieldOwlDateComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-date/df-field-owl-date.component';
import { DFFieldOwlDateTimeComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-date-time/df-field-owl-date-time.component';
import { DFFieldOwlTimeComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-time/df-field-owl-time.component';
import { DFFieldOwlMonthComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-month/df-field-owl-month.component';
import { DFFieldOwlYearComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-year/df-field-owl-year.component';
import { DFFieldOwlDateRangeComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-date-range/df-field-owl-date-range.component';
import { DFFieldOwlTimeRangeComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-time-range/df-field-owl-time-range.component';
import { DFFieldOwlDateTimeRangeComponent } from './components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-date-time-range/df-field-owl-date-time-range.component';
import { DFAlertComponent } from './components/shared/dynamic-form/df-alert/df-alert.component';
import { DFDialogFileUploadPromptComponent } from './components/shared/dynamic-form/df-dialog-file-upload-prompt/df-dialog-file-upload-prompt.component';
import { DFFieldMultipleComponent } from './components/shared/dynamic-form/df-field-multiple/df-field-multiple.component';
import { DFWrapperStepperComponent } from './components/shared/dynamic-form/df-wrapper-stepper/df-wrapper-stepper.component';
import { DFWrapperAccordionComponent } from './components/shared/dynamic-form/df-wrapper-accordion/df-wrapper-accordion.component';
import { DFWrapperPanelComponent } from './components/shared/dynamic-form/df-wrapper-panel/df-wrapper-panel.component';
import { DFWrapperMultipleComponent } from './components/shared/dynamic-form/df-wrapper-multiple/df-wrapper-multiple.component';
import { DFCustomAlertInfoNoDataComponent } from './components/shared/dynamic-form/df-custom-alert-info-no-data/df-custom-alert-info-no-data.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { PublicationFormsConfigurationsComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations.component';
import { PublicationTypesMasterDataConfigurationsComponent } from './components/configurations/publication-types-master-data-configurations/publication-types-master-data-configurations.component';
import { PublicationGeneralTypesMasterDataConfigurationsComponent } from './components/configurations/publication-general-types-master-data-configurations/publication-general-types-master-data-configurations.component';
import { PublicationFormVersionsConfigurationsComponent } from './components/configurations/publication-forms-configurations/publication-forms-versions-configurations/publication-form-versions-configurations.component';
import { PublicationFormsConfigurationsFormComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations-form/publication-forms-configurations-form.component';
import { PublicationFormsVersionsConfigurationsFormComponent } from './components/configurations/publication-forms-configurations/publication-forms-versions-configurations/publication-forms-versions-configurations-form/publication-forms-versions-configurations-form.component';
import { PublicationFormsVersionsConfigurationsDetailComponent } from './components/configurations/publication-forms-configurations/publication-forms-versions-configurations/publication-forms-versions-configurations-detail/publication-forms-versions-configurations-detail.component';
import { PublicationFormsConfigurationsDetailComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations-detail/publication-forms-configurations-detail.component';
import { PublicationFormsInitialConfigurationsFormComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations-form/publication-forms-initial-configurations-form/publication-forms-initial-configurations-form.component';
import { PublicationFormsGeneralConfigurationsFormComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations-form/publication-forms-general-configurations-form/publication-forms-general-configurations-form.component';
import { PublicationFormsAdvancedConfigurationsFormComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations-form/publication-forms-advanced-configurations-form/publication-forms-advanced-configurations-form.component';
import { PublicationFormsConfigurationsOverviewFormComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations-form/publication-forms-configurations-overview-form/publication-forms-configurations-overview-form.component';

registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageBlankComponent,
    PageComponentsComponent,
    PageNotFoundComponent,
    PageUnderConstructionComponent,
    CoreComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    OverviewComponent,
    PublicationComponent,
    PublicationFormComponent,
    PublicationFormGridSystemsDefaultComponent,
    PublicationFormGridSystemsMaterialComponent,
    PublicationFormGridSystemsBootstrapComponent,
    PublicationFormGridSystemsTailwindComponent,
    PublicationFormRecursiveComponent,
    PublicationDetailComponent,
    PublicationDetailGridSystemsDefaultComponent,
    PublicationDetailGridSystemsMaterialComponent,
    PublicationDetailGridSystemsBootstrapComponent,
    PublicationDetailGridSystemsTailwindComponent,
    PublicationDetailRecursiveComponent,
    CustomModalPublicationRemoveConfirmComponent,
    CustomModalPublicationSubmitConfirmComponent,
    CustomModalPublicationExitFormConfirmComponent,
    CustomDialogPublicationRemoveConfirmComponent,
    CustomDialogPublicationSubmitConfirmComponent,
    CustomDialogPublicationExitFormConfirmComponent,
    GhostTableComponent,
    LoaderComponent,
    DatetimePickerComponent,
    DatePickerComponent,
    MonthPickerComponent,
    YearPickerComponent,
    TimePickerComponent,
    DateTimePickerComponent,
    OwlDatetimePickerComponent,
    OwlDatePickerComponent,
    OwlMonthPickerComponent,
    OwlYearPickerComponent,
    OwlTimePickerComponent,
    OwlDateTimePickerComponent,
    OwlDateRangePickerComponent,
    OwlTimeRangePickerComponent,
    OwlDateTimeRangePickerComponent,
    DialogConfirmComponent,
    DialogAlertComponent,
    DialogPromptComponent,
    ModalConfirmComponent,
    ModalAlertComponent,
    ModalPromptComponent,
    DynamicFormComponent,
    DFFieldTextComponent,
    DFFieldNumberComponent,
    DFFieldTextareaComponent,
    DFFieldDateComponent,
    DFFieldTimeComponent,
    DFFieldDatetimeComponent,
    DFFieldYearComponent,
    DFFieldFileComponent,
    DFFieldImageComponent,
    DFFieldFileUploadComponent,
    DFFieldImageUploadComponent,
    DFFieldColorComponent,
    DFFieldCheckboxComponent,
    DFFieldRadioComponent,
    DFFieldSliderComponent,
    DFFieldSelectComponent,
    DFFieldNGXSelectComponent,
    DfFieldEmailComponent,
    DfFieldTelComponent,
    DfFieldUrlComponent,
    DfFieldPasswordComponent,
    DfFieldSearchComponent,
    DFFieldMonthComponent,
    DFFieldOwlDatetimeComponent,
    DFFieldOwlDateComponent,
    DFFieldOwlDateTimeComponent,
    DFFieldOwlTimeComponent,
    DFFieldOwlMonthComponent,
    DFFieldOwlYearComponent,
    DFFieldOwlDateRangeComponent,
    DFFieldOwlTimeRangeComponent,
    DFFieldOwlDateTimeRangeComponent,
    DFFieldMultipleComponent,
    DFAlertComponent,
    DFDialogFileUploadPromptComponent,
    DFWrapperStepperComponent,
    DFWrapperAccordionComponent,
    DFWrapperPanelComponent,
    DFWrapperMultipleComponent,
    DFCustomAlertInfoNoDataComponent,
    ConfigurationsComponent,
    PublicationFormsConfigurationsComponent,
    PublicationTypesMasterDataConfigurationsComponent,
    PublicationGeneralTypesMasterDataConfigurationsComponent,
    PublicationFormVersionsConfigurationsComponent,
    PublicationFormsConfigurationsFormComponent,
    PublicationFormsVersionsConfigurationsFormComponent,
    PublicationFormsVersionsConfigurationsDetailComponent,
    PublicationFormsConfigurationsDetailComponent,
    PublicationFormsInitialConfigurationsFormComponent,
    PublicationFormsGeneralConfigurationsFormComponent,
    PublicationFormsAdvancedConfigurationsFormComponent,
    PublicationFormsConfigurationsOverviewFormComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    HttpClientModule,
    LuxonModule,
    NgxSelectModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxDocViewerModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id-ID' },
    { provide: MAT_DATE_LOCALE, useValue: 'id-ID' },
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'id-ID' },
    { provide: ENV, useValue: CONFIG },
    AppService, AppGeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }