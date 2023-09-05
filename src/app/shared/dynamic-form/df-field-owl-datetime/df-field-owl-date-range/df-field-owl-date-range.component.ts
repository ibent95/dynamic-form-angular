import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { OWL_DATE_TIME_FORMATS, DateView, OwlDateTimeComponent } from '@danielmoncada/angular-datetime-picker';
import { DFField } from 'src/app/shared/dynamic-form/dynamic-forms';
import { OWL_NATIVE_DATE_FORMATS } from 'src/app/services/app-general.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-owl-date-range',
  templateUrl: './df-field-owl-date-range.component.html',
  styleUrls: ['./../../dynamic-form.component.scss'],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_FORMATS },
  ]
})
export class DFFieldOwlDateRangeComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  formGroup!: FormGroup;
  owlDateTimeMonthStartView!: DateView;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
    this.owlDateTimeMonthStartView = DateView.MULTI_YEARS;
  }

  ngOnInit(): void { }

  public setOwlDateTimeYear(selectedMonthYear: object, yearpicker: OwlDateTimeComponent<object>): void {
    yearpicker.close();
    this.formGroup.get(this.field?.field_name)?.setValue(selectedMonthYear);
  }

}
