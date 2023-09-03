import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/shared/dynamic-form/dynamic-forms';
import { SelectOptionsGroup } from 'src/app/interfaces/select-options-group';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-ngx-select',
  templateUrl: './df-field-ngx-select.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldNGXSelectComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() options!: SelectOptionsGroup;
  @Input() value!: any;

  formGroup!: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
  }

  ngOnInit(): void { }

  onSelectionChanges(data: any) { }

}
