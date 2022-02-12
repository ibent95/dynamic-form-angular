import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { LoginComponent } from './module/login/login.component';
import { PublicationComponent } from './module/publication/publication.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'publication',
    component: PublicationComponent,
    children: [
      {
        path: 'create',
        component: PublicationComponent,
      },
      {
        path: 'update',
        component: PublicationComponent
      }
    ],
  },
  {
    path: 'research',
    component: PublicationComponent,
    children: [
      {
        path: 'create',
        component: PublicationComponent,
      },
      {
        path: 'update',
        component: PublicationComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
