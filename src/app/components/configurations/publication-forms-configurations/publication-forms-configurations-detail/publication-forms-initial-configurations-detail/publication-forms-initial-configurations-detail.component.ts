import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOptionsInterface } from '../../publication-forms-configurations-form/publication-forms-configurations-form.component';
import { PageState } from 'src/app/services/app-general.service';

@Component({
  selector: 'app-publication-forms-initial-configurations-detail',
  templateUrl: './publication-forms-initial-configurations-detail.component.html',
  styles: ['ng-deep table.table-detail { opacity: 0; visibility: hidden; -webkit-transition: opacity 600ms, visibility 600ms; transition: opacity 600ms, visibility 600ms; } table.table-detail-show { visibility: visible !important; opacity: 1 !important; } table.table-detail.table-detail-custom-row tbody tr td { padding: 10px 0 ; table.table-detail.table-detail-show tbody tr td { padding: 0 ; } }']
})
export class PublicationFormsInitialConfigurationsDetailComponent implements OnInit {

  pageState: PageState = PageState.LOADING;

  @Input() data!: any;
  @Input() selectOptions!: SelectOptionsInterface;

  selectedFormVersion: any;
  selectedFormVersionLoading: boolean = true;
  selectedFieldType: any;
  selectedFieldTypeLoading: boolean = true;
  selectedParentForm: any;
  selectedParentFormLoading: boolean = true;

  @Output() onPublicationFormVersionChange: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() onPublicationFieldTypeChange: EventEmitter<any> = new EventEmitter<any>(true);

  constructor(
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.selectedFormVersion = this.data?.form_version;
    this.selectedFieldType   = this.selectOptions.fieldTypes?.find((item: any) => item.dynamic_form_field_type_code === this.data?.field_type);
    this.selectedParentForm  = this.data?.form_parent;

    this.pageState = PageState.LOADED;
    this.ref.detectChanges();
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
