import { ExtraOptions, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PublicationFormComponent } from './components/publication/publication-form/publication-form.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PageComponentsComponent } from './components/shared/pages/page-components/page-components.component';
import { PageNotFoundComponent } from './components/shared/pages/page-not-found/page-not-found.component';
import { PublicationDetailComponent } from './components/publication/publication-detail/publication-detail.component';
import { PublicationFormsConfigurationsComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations.component';
import { PublicationGeneralTypesMasterDataConfigurationsComponent } from './components/configurations/publication-general-types-master-data-configurations/publication-general-types-master-data-configurations.component';
import { PublicationTypesMasterDataConfigurationsComponent } from './components/configurations/publication-types-master-data-configurations/publication-types-master-data-configurations.component';
import { PublicationFormsConfigurationsFormComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations-form/publication-forms-configurations-form.component';
import { PublicationFormsConfigurationsDetailComponent } from './components/configurations/publication-forms-configurations/publication-forms-configurations-detail/publication-forms-configurations-detail.component';
import { PublicationFormVersionsConfigurationsManagementFormComponent } from './components/configurations/publication-forms-configurations/publication-form-versions-configurations/publication-form-versions-configurations-management-form/publication-form-versions-configurations-management-form.component';
import { PublicationFormVersionsConfigurationsDetailComponent } from './components/configurations/publication-forms-configurations/publication-form-versions-configurations/publication-form-versions-configurations-detail/publication-form-versions-configurations-detail.component';
import { PublicationFormVersionsConfigurationsFormComponent } from './components/configurations/publication-forms-configurations/publication-form-versions-configurations/publication-form-versions-configurations-form/publication-form-versions-configurations-form.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    children: [],
  },

  // Publications data menu
  {
    path: 'publication',
    component: PublicationComponent,
    children: [
      {
        path: 'create',
        component: PublicationFormComponent,
      },
      {
        path: 'update',
        component: PublicationFormComponent
      },
      {
        path: 'detail',
        component: PublicationDetailComponent
      }
    ],
  },

  // Research data menu
  {
    path: 'research',
    component: PublicationComponent,
    children: [
      {
        path: 'create',
        component: PublicationFormComponent,
      },
      {
        path: 'update',
        component: PublicationFormComponent
      }
    ],
  },

  // Configurations menu
  {
    path: 'configurations-publication-forms',
    component: PublicationFormsConfigurationsComponent,
    children: [
      {
        path: 'create',
        component: PublicationFormsConfigurationsFormComponent,
      },
      {
        path: 'update',
        component: PublicationFormsConfigurationsFormComponent
      },
      {
        path: 'detail',
        component: PublicationFormsConfigurationsDetailComponent
      },
      {
        path: 'form-version-create',
        component: PublicationFormVersionsConfigurationsFormComponent,
      },
      {
        path: 'form-version-update',
        component: PublicationFormVersionsConfigurationsFormComponent
      },
      {
        path: 'form-version-detail',
        component: PublicationFormVersionsConfigurationsDetailComponent
      },
      {
        path: 'manage',
        component: PublicationFormVersionsConfigurationsManagementFormComponent
      },
    ],
  },
  {
    path: 'configurations-master-data-publication-general-types',
    component: PublicationGeneralTypesMasterDataConfigurationsComponent,
    children: [
      {
        path: 'create',
        component: PublicationFormComponent,
      },
      {
        path: 'update',
        component: PublicationFormComponent
      },
      {
        path: 'detail',
        component: PublicationDetailComponent
      }
    ],
  },
  {
    path: 'configurations-master-data-publication-types',
    component: PublicationTypesMasterDataConfigurationsComponent,
    children: [
      {
        path: 'create',
        component: PublicationFormComponent,
      },
      {
        path: 'update',
        component: PublicationFormComponent
      },
      {
        path: 'detail',
        component: PublicationDetailComponent
      }
    ],
  },

  // Others menu
  {
    path: 'components',
    component: PageComponentsComponent,
    children: [],
  },
];

const config: ExtraOptions = {
  // enableTracing: true,
  scrollPositionRestoration: 'enabled'
};
