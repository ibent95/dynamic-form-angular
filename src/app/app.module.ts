// Angular and other libraries
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeId from "@angular/common/locales/id";

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

// Module components
import { LoginComponent } from './module/login/login.component';
import { OverviewComponent } from './module/overview/overview.component';
import { PublicationComponent } from './module/publication/publication.component';
import { PublicationFormComponent } from './module/publication/publication-form/publication-form.component';
import { PublicationDetailComponent } from './module/publication/publication-detail/publication-detail.component';
import { GhostTableComponent } from './shared/ghost-table/ghost-table.component';

registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    PageUnderConstructionComponent,
    CoreComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PublicationComponent,
    OverviewComponent,
    PageBlankComponent,
    PageComponentsComponent,
    PublicationFormComponent,
    PublicationDetailComponent,
    GhostTableComponent,
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
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id' },
    { provide: ENV, useValue: CONFIG },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }