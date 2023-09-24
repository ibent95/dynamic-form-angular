import { Location } from "@angular/common";
import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms";
import { AppService } from "src/app/services/app.service";
import { DFMetadata, DFDataService, DFField } from "src/app/components/shared/dynamic-form/dynamic-forms";
import { ENV } from "src/app/app.config";
import { viewerType } from "ngx-doc-viewer";

@Component({
  selector: 'app-publication-detail-recursive',
  templateUrl: './publication-detail-recursive.component.html',
  styles: ['']
})
export class PublicationDetailRecursiveComponent implements OnInit {

  @Input() dfMetadata: DFMetadata | any;
  @Input() parentField!: DFField;
  @Input() gridSystemsClassConfig!: Array<string>;

  fields!: Array<DFField>;
  selectedPublicationType!: { text: string; value: any };
  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  loadingMessage!: string;
  ngxDocViewer!: viewerType;

  constructor(
    private location: Location,
    private appSvc: AppService,
    private dfDataSvc: DFDataService,
    private ref: ChangeDetectorRef,
    @Inject(ENV) private config: any,
  ) {
    this.ngxDocViewer = this.config.ngxDocViewer;
  }

  public ngOnInit(): void {
    this.fields = this.parentField?.children ?? this.dfMetadata.initialFields?.forms;
    this.ref.detectChanges();
  }

  public onBackButtonClick() {
    this.location.back();
  }

}
