import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectOptionsInterface } from '../../publication-forms-configurations-form/publication-forms-configurations-form.component';
import { AppFormStatus } from 'src/app/services/app.service';

@Component({
  selector: 'app-publication-forms-advanced-configurations-detail',
  templateUrl: './publication-forms-advanced-configurations-detail.component.html',
  styles: [''],
})
export class PublicationFormsAdvancedConfigurationsDetailComponent implements OnInit {

  @Input() data!: any;
  @Input() selectOptions!: SelectOptionsInterface;

  selectedFieldType!: any;


  constructor(
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.selectedFieldType = this.selectOptions['fieldTypes']?.find((fieldType: any) => fieldType.dynamic_form_field_type_code === this.data?.field_type);

    this.ref.detectChanges();
  }

}
