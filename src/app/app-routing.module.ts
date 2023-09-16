import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PublicationFormComponent } from './components/publication/publication-form/publication-form.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PageComponentsComponent } from './components/shared/pages/page-components/page-components.component';
import { PageNotFoundComponent } from './components/shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/core/core.module').then(m => m.CoreModule)
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
      }
    ],
  },
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
  {
    path: 'components',
    component: PageComponentsComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
