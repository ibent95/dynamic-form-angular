// Angular and other libraries
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

// App routings, settings, components
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { CONFIG, ENV } from './app.config';
import { AppService } from './service/app.service';

// App core components
import { CoreModule } from './core/core.module';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';
import { FooterComponent } from './core/footer/footer.component';

// Shared components
import { PageBlankComponent } from './shared/page-blank/page-blank.component';
import { PageComponentsComponent } from './shared/page-components/page-components.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './shared/page-under-construction/page-under-construction.component';
import { GhostTableComponent } from './shared/ghost-table/ghost-table.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { DatetimePickerComponent } from './shared/datetime-picker/datetime-picker.component';
import { DatePickerComponent } from './shared/datetime-picker/date-picker/date-picker.component';
import { MonthPickerComponent } from './shared/datetime-picker/month-picker/month-picker.component';
import { YearPickerComponent } from './shared/datetime-picker/year-picker/year-picker.component';
import { TimePickerComponent } from './shared/datetime-picker/time-picker/time-picker.component';
import { DateTimePickerComponent } from './shared/datetime-picker/date-time-picker/date-time-picker.component';

// Module components
import { LoginComponent } from './module/login/login.component';
import { OverviewComponent } from './module/overview/overview.component';
import { PublicationComponent } from './module/publication/publication.component';
import { PublicationFormComponent } from './module/publication/publication-form/publication-form.component';
import { PublicationDetailComponent } from './module/publication/publication-detail/publication-detail.component';
import { OwlDatetimePickerComponent } from './shared/owl-datetime-picker/owl-datetime-picker.component';
import { OwlDatePickerComponent } from './shared/owl-datetime-picker/owl-date-picker/owl-date-picker.component';
import { OwlMonthPickerComponent } from './shared/owl-datetime-picker/owl-month-picker/owl-month-picker.component';
import { OwlYearPickerComponent } from './shared/owl-datetime-picker/owl-year-picker/owl-year-picker.component';
import { OwlTimePickerComponent } from './shared/owl-datetime-picker/owl-time-picker/owl-time-picker.component';
import { OwlDateTimePickerComponent } from './shared/owl-datetime-picker/owl-date-time-picker/owl-date-time-picker.component';
import { OwlDateRangePickerComponent } from './shared/owl-datetime-picker/owl-date-range-picker/owl-date-range-picker.component';
import { OwlTimeRangePickerComponent } from './shared/owl-datetime-picker/owl-time-range-picker/owl-time-range-picker.component';
import { OwlDateTimeRangePickerComponent } from './shared/owl-datetime-picker/owl-date-time-range-picker/owl-date-time-range-picker.component';

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
  ],
  imports: [
    BrowserModule,
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
    { provide: ENV, useValue: CONFIG },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }