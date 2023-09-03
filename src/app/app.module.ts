// Angular and other libraries
import { LOCALE_ID, NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeId from "@angular/common/locales/id";
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { LuxonModule } from 'luxon-angular';
import { NgxSelectModule } from 'ngx-select-ex';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from '@danielmoncada/angular-datetime-picker';

// App routings, settings, components
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
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
import { PageBlankComponent } from './shared/page-blank/page-blank.component';
import { PageComponentsComponent } from './shared/page-components/page-components.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './shared/page-under-construction/page-under-construction.component';
import { GhostTableComponent } from './shared/ghost-table/ghost-table.component';
import { LoaderComponent } from './shared/loader/loader.component';

// App shared components (Custom material datetime pickers)
import { DatetimePickerComponent } from './shared/datetime-picker/datetime-picker.component';
import { DatePickerComponent } from './shared/datetime-picker/date-picker/date-picker.component';
import { MonthPickerComponent } from './shared/datetime-picker/month-picker/month-picker.component';
import { YearPickerComponent } from './shared/datetime-picker/year-picker/year-picker.component';
import { TimePickerComponent } from './shared/datetime-picker/time-picker/time-picker.component';
import { DateTimePickerComponent } from './shared/datetime-picker/date-time-picker/date-time-picker.component';

// App shared components (OWL datetime pickers)
import { OwlDatetimePickerComponent } from './shared/owl-datetime-picker/owl-datetime-picker.component';
import { OwlDatePickerComponent } from './shared/owl-datetime-picker/owl-date-picker/owl-date-picker.component';
import { OwlMonthPickerComponent } from './shared/owl-datetime-picker/owl-month-picker/owl-month-picker.component';
import { OwlYearPickerComponent } from './shared/owl-datetime-picker/owl-year-picker/owl-year-picker.component';
import { OwlTimePickerComponent } from './shared/owl-datetime-picker/owl-time-picker/owl-time-picker.component';
import { OwlDateTimePickerComponent } from './shared/owl-datetime-picker/owl-date-time-picker/owl-date-time-picker.component';
import { OwlDateRangePickerComponent } from './shared/owl-datetime-picker/owl-date-range-picker/owl-date-range-picker.component';
import { OwlTimeRangePickerComponent } from './shared/owl-datetime-picker/owl-time-range-picker/owl-time-range-picker.component';
import { OwlDateTimeRangePickerComponent } from './shared/owl-datetime-picker/owl-date-time-range-picker/owl-date-time-range-picker.component';

// App shared components (Dialogs)
import { DialogConfirmComponent } from './shared/dialog-confirm/dialog-confirm.component';
import { DialogAlertComponent } from './shared/dialog-alert/dialog-alert.component';
import { DialogPromptComponent } from './shared/dialog-prompt/dialog-prompt.component';

// App module / menu components
import { LoginComponent } from './modules/login/login.component';
import { OverviewComponent } from './modules/overview/overview.component';

// App module / menu components (Publication)
import { PublicationComponent } from './modules/publication/publication.component';
import { PublicationFormComponent } from './modules/publication/publication-form/publication-form.component';
import { PublicationDetailComponent } from './modules/publication/publication-detail/publication-detail.component';
import { PublicationFormGridSystemsDefaultComponent } from './modules/publication/publication-form/grid-systems/publication-form-grid-systems-default/publication-form-grid-systems-default.component';
import { PublicationFormGridSystemsBootstrapComponent } from './modules/publication/publication-form/grid-systems/publication-form-grid-systems-bootstrap/publication-form-grid-systems-bootstrap.component';
import { PublicationFormGridSystemsTailwindComponent } from './modules/publication/publication-form/grid-systems/publication-form-grid-systems-tailwind/publication-form-grid-systems-tailwind.component';

// DynamicForm components
import { DynamicFormComponent } from './shared/dynamic-form/dynamic-form.component';
import { DFFieldTextComponent } from './shared/dynamic-form/df-field-text/df-field-text.component';
import { DFFieldNumberComponent } from './shared/dynamic-form/df-field-number/df-field-number.component';
import { DFFieldTextareaComponent } from './shared/dynamic-form/df-field-textarea/df-field-textarea.component';
import { DFFieldDateComponent } from './shared/dynamic-form/df-field-date/df-field-date.component';
import { DFFieldTimeComponent } from './shared/dynamic-form/df-field-time/df-field-time.component';
import { DFFieldDatetimeComponent } from './shared/dynamic-form/df-field-datetime/df-field-datetime.component';
import { DFFieldYearComponent } from './shared/dynamic-form/df-field-year/df-field-year.component';
import { DFFieldFileComponent } from './shared/dynamic-form/df-field-file/df-field-file.component';
import { DFFieldImageComponent } from './shared/dynamic-form/df-field-image/df-field-image.component';
import { DFFieldColorComponent } from './shared/dynamic-form/df-field-color/df-field-color.component';
import { DFFieldCheckboxComponent } from './shared/dynamic-form/df-field-checkbox/df-field-checkbox.component';
import { DFFieldRadioComponent } from './shared/dynamic-form/df-field-radio/df-field-radio.component';
import { DFFieldSliderComponent } from './shared/dynamic-form/df-field-slider/df-field-slider.component';
import { DFFieldSelectComponent } from './shared/dynamic-form/df-field-select/df-field-select.component';
import { DFFieldNGXSelectComponent } from './shared/dynamic-form/df-field-ngx-select/df-field-ngx-select.component';
import { DfFieldEmailComponent } from './shared/dynamic-form/df-field-email/df-field-email.component';
import { DfFieldTelComponent } from './shared/dynamic-form/df-field-tel/df-field-tel.component';
import { DfFieldUrlComponent } from './shared/dynamic-form/df-field-url/df-field-url.component';
import { DfFieldPasswordComponent } from './shared/dynamic-form/df-field-password/df-field-password.component';
import { DfFieldSearchComponent } from './shared/dynamic-form/df-field-search/df-field-search.component';
import { DFFieldMonthComponent } from './shared/dynamic-form/df-field-month/df-field-month.component';
import { DFFieldOwlDatetimeComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-datetime.component';
import { DFFieldOwlDateComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-date/df-field-owl-date.component';
import { DFFieldOwlDateTimeComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-date-time/df-field-owl-date-time.component';
import { DFFieldOwlTimeComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-time/df-field-owl-time.component';
import { DFFieldOwlMonthComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-month/df-field-owl-month.component';
import { DFFieldOwlYearComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-year/df-field-owl-year.component';
import { DFFieldOwlDateRangeComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-date-range/df-field-owl-date-range.component';
import { DFFieldOwlTimeRangeComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-time-range/df-field-owl-time-range.component';
import { DFFieldOwlDateTimeRangeComponent } from './shared/dynamic-form/df-field-owl-datetime/df-field-owl-date-time-range/df-field-owl-date-time-range.component';
import { DFAlertComponent } from './shared/dynamic-form/df-alert/df-alert.component';
import { DFFieldMultipleComponent } from './shared/dynamic-form/df-field-multiple/df-field-multiple.component';
import { DFWrapperStepperComponent } from './shared/dynamic-form/df-wrapper-stepper/df-wrapper-stepper.component';
import { DFWrapperAccordionComponent } from './shared/dynamic-form/df-wrapper-accordion/df-wrapper-accordion.component';
import { DFWrapperPanelComponent } from './shared/dynamic-form/df-wrapper-panel/df-wrapper-panel.component';
import { DFWrapperMultipleComponent } from './shared/dynamic-form/df-wrapper-multiple/df-wrapper-multiple.component';
import { DFCustomAlertInfoNoDataComponent } from './shared/dynamic-form/df-custom-alert-info-no-data/df-custom-alert-info-no-data.component';

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
    PublicationDetailComponent,
    PublicationFormGridSystemsDefaultComponent,
    PublicationFormGridSystemsBootstrapComponent,
    PublicationFormGridSystemsTailwindComponent,
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
    DFWrapperStepperComponent,
    DFWrapperAccordionComponent,
    DFWrapperPanelComponent,
    DFWrapperMultipleComponent,
    DFCustomAlertInfoNoDataComponent,
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
    HttpClientModule,
    LuxonModule,
    NgxSelectModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
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