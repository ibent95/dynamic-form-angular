import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { SelectOptionsInterface } from '../../publication-forms-configurations-form/publication-forms-configurations-form.component';
import { PageState } from 'src/app/services/app-general.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { PageNotFoundComponent } from 'src/app/components/shared/pages/page-not-found/page-not-found.component';

@Component({
  selector: 'app-publication-forms-initial-configurations-detail',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, LoaderComponent, PageNotFoundComponent],
  templateUrl: './publication-forms-initial-configurations-detail.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationFormsInitialConfigurationsDetailComponent implements OnInit {

  private changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input() data!: any;
  @Input() selectOptions!: SelectOptionsInterface;

  pageState: PageState = PageState.LOADING;

  selectedFormVersion: any;
  selectedFormVersionLoading: boolean = true;
  selectedFieldType: any;
  selectedFieldTypeLoading: boolean = true;
  selectedParentForm: any;
  selectedParentFormLoading: boolean = true;

  @Output() onPublicationFormVersionChange: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() onPublicationFieldTypeChange: EventEmitter<any> = new EventEmitter<any>(true);

  constructor() { }

  ngOnInit(): void {
    this.selectedFormVersion = this.data?.form_version;
    this.selectedFieldType   = this.selectOptions.fieldTypes?.find((item: any) => item.dynamic_form_field_type_code === this.data?.field_type);
    this.selectedParentForm  = this.data?.form_parent;

    this.changeDetector.detectChanges();
    this.pageState = PageState.LOADED;
  }

  public onFormVersionChange(data: any) {
    this.selectedFormVersionLoading = true;
    this.selectedFormVersion = data;

    this.selectedFormVersionLoading = false;
    this.onPublicationFormVersionChange.next(data);
  }

  public onFieldTypeChange(data: any) {
    this.selectedFieldTypeLoading = true;
    this.selectedFieldType = data;

    this.selectedFieldTypeLoading = false;
    this.onPublicationFieldTypeChange.next(data);
  }

  public onParentFormChange(data: any) {
    this.selectedParentForm = data;
  }

  public jsonParse(data: string): any {
    return JSON.parse(data);
  }

  public jsonStringify(data: any): string {
    return JSON.stringify(data, null, 4);
  }

  /**
   * test
   */
  public test(data: boolean) {
    //console.log('codeMirror', data);
  }

  public windowHistoryBack(): void {
    window.history.back();
  }

}
