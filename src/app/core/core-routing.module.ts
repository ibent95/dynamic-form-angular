import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationComponent } from '../modules/publication/publication.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: ':component', //:component is dynamic here
        component: CoreComponent,
        children: [
          {
            path: ':form', //:form is dynamic here
            component: CoreComponent
          },
        ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }