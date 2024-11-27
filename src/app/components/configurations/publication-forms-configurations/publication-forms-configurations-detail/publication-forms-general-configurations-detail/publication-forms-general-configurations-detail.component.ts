import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { PageNotFoundComponent } from 'src/app/components/shared/pages/page-not-found/page-not-found.component';
import { ProsemirrorComponent } from 'src/app/components/shared/prosemirror/prosemirror.component';

@Component({
  selector: 'app-publication-forms-general-configurations-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatSlideToggleModule, MatInputModule, ProsemirrorComponent],
  templateUrl: './publication-forms-general-configurations-detail.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationFormsGeneralConfigurationsDetailComponent implements OnInit {

  @Input() data!: any;
  @Input() selectOptions!: any;
  @Input() positionMinValue: number = 0;

  constructor() { }

  ngOnInit(): void { }

}
