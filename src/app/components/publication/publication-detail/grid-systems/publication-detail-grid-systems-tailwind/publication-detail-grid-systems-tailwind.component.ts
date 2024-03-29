import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DFMetadata } from 'src/app/components/shared/dynamic-form/dynamic-forms';

@Component({
  selector: 'app-publication-detail-grid-systems-tailwind',
  templateUrl: './publication-detail-grid-systems-tailwind.component.html',
  styles: ['']
})
export class PublicationDetailGridSystemsTailwindComponent implements OnInit {

  @Input() dfMetadata: DFMetadata | any;
  @Input() userData: any;

  @Output() onBackButtonClicked!: EventEmitter<any>;

  selectedPublicationType!: { text: string; value: any };
  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  loadingMessage!: string;
  gridSystemsClassConfig!: Array<string>;
  gridSystemsChildClassConfig!: string;

  constructor(
    private ref: ChangeDetectorRef,
  ) {
    this.onBackButtonClicked = new EventEmitter<any>(true);
  }

  public ngOnInit(): void {
    this.gridSystemsClassConfig = [
      'grid',
      (this.dfMetadata.gridSystems?.cols) ? 'grid-cols-' + (this.dfMetadata.gridSystems?.cols || 12) : '',
      'grid-flow-row gap-3'
    ];
    this.gridSystemsChildClassConfig = 'grid grid-cols-12 grid-flow-col auto-cols-max';
    this.ref.detectChanges();
  }

  public onBackButtonClick() {
    this.onBackButtonClicked.emit(true);
  }

}
