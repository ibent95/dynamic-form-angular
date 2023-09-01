import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFFieldOwlDatetimeMode } from 'src/app/enums/df-field';
import { DFField } from 'src/app/interfaces/df-field';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-owl-datetime',
  templateUrl: './df-field-owl-datetime.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldOwlDatetimeComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  // Datetime picker mode
  @Input() mode!: DFFieldOwlDatetimeMode | string;

  formGroup: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
    this.mode = this.mode || DFFieldOwlDatetimeMode.DATE;
  }

  ngOnInit(): void { }

}
