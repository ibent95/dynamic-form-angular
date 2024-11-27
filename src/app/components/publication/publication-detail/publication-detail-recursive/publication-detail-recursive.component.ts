import { CommonModule, Location } from "@angular/common";
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, Input, OnInit } from '@angular/core';
import { AppService } from "src/app/services/app.service";
import { DFMetadata, DFDataService, DFField } from "src/app/components/shared/dynamic-form/dynamic-forms";
import { ENV } from "src/app/app.config";
import { NgxDocViewerModule, viewerType } from "ngx-doc-viewer";
import { MatGridListModule } from "@angular/material/grid-list";
import { DFFieldTimeComponent } from "src/app/components/shared/dynamic-form/df-field-time/df-field-time.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatStepperModule } from "@angular/material/stepper";

@Component({
  selector: 'app-publication-detail-recursive',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatExpansionModule, MatStepperModule, MatDividerModule, MatButtonModule, MatIconModule, NgxDocViewerModule, DFFieldTimeComponent],
  templateUrl: './publication-detail-recursive.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
