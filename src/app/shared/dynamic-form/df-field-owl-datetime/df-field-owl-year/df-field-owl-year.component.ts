import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DateView, OWL_DATE_TIME_FORMATS, OwlDateTimeComponent } from '@danielmoncada/angular-datetime-picker';
import { DFField } from 'src/app/interfaces/df-field';
import { OWL_NATIVE_YEAR_FORMATS } from 'src/app/services/app-general.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-owl-year',
  templateUrl: './df-field-owl-year.component.html',
  styleUrls: ['./../../dynamic-form.component.scss'],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_YEAR_FORMATS },
  ]
})
export class DFFieldOwlYearComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  formGroup!: FormGroup;
  owlDateTimeYearStartView!: DateView;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
    this.owlDateTimeYearStartView = DateView.MULTI_YEARS;
  }

  ngOnInit(): void { }

  public setOwlDateTimeYear(selectedMonthYear: object, yearpicker: OwlDateTimeComponent<object>): void {
    yearpicker.close();
    this.formGroup.get(this.field?.field_name)?.setValue(selectedMonthYear);
  }

}
