import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { LuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS } from '@angular/material-luxon-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, ThemePalette } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DateTime } from 'luxon';
import { DFField } from 'src/app/shared/dynamic-form/dynamic-forms';
import { LUXON_YEAR_FORMATS } from 'src/app/services/app-general.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-year',
  templateUrl: './df-field-year.component.html',
  styleUrls: ['./../dynamic-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: LuxonDateAdapter, deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: LUXON_YEAR_FORMATS },
  ]
})
export class DFFieldYearComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  formGroup!: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
  }

  ngOnInit(): void { }

  setYear(normalizedMonthAndYear: DateTime, datepicker: MatDatepicker<DateTime>) {
    datepicker.close();

    const CTRL_VALUE = DateTime.fromObject({
      year: normalizedMonthAndYear.year
    });

    this.formGroup.get(this.field?.field_name)?.setValue(CTRL_VALUE);
  }

}
