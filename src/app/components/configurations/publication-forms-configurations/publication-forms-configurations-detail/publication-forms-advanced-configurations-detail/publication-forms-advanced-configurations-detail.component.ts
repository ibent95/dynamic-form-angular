import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { SelectOptionsInterface } from '../../publication-forms-configurations-form/publication-forms-configurations-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CodemirrorComponent } from 'src/app/components/shared/codemirror/codemirror.component';

@Component({
  selector: 'app-publication-forms-advanced-configurations-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, CodemirrorComponent],
  templateUrl: './publication-forms-advanced-configurations-detail.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  public jsonStringify(data: any): string {
    return JSON.stringify(data, null, 4);
  }

}
