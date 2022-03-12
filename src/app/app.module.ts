import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './module/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './shared/page-under-construction/page-under-construction.component';
import { CoreComponent } from './core/core.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContentComponent } from './core/content/content.component';
import { PublicationComponent } from './module/publication/publication.component';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { OverviewComponent } from './module/overview/overview.component';
import { PageBlankComponent } from './shared/page-blank/page-blank.component';
import { PageComponentsComponent } from './shared/page-components/page-components.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicationFormComponent } from './module/publication/publication-form/publication-form.component';
import { PublicationDetailComponent } from './module/publication/publication-detail/publication-detail.component';
import { CONFIG, ENV } from './app.config';
import { AppService } from './service/app.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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