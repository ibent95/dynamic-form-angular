import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DFMetadata } from 'src/app/components/shared/dynamic-form/dynamic-forms';

@Component({
  selector: 'app-publication-detail-grid-systems-material',
  templateUrl: './publication-detail-grid-systems-material.component.html',
  styles: ['']
})
export class PublicationDetailGridSystemsMaterialComponent implements OnInit {

  @Input() dfMetadata: DFMetadata | any;
  @Input() userData: any;

  @Output() onFormBackButtonClicked!: EventEmitter<any>;

  selectedPublicationType!: { text: string; value: any };
  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  loadingMessage!: string;
  gridSystemsClassConfig!: Array<string>;

  constructor(
    private ref: ChangeDetectorRef,
  ) {
    this.onFormBackButtonClicked = new EventEmitter<any>(true);
  }

  public ngOnInit(): void {
    this.gridSystemsClassConfig = [];
    this.ref.detectChanges();
  }

  public onFormBackButtonClick() {
    this.onFormBackButtonClicked.emit(true);
  }

}
