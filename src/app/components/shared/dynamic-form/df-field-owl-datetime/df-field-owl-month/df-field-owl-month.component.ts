import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { OWL_DATE_TIME_FORMATS, DateView, OwlDateTimeComponent } from '@danielmoncada/angular-datetime-picker';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { OWL_NATIVE_MONTH_FORMATS } from 'src/app/services/app-general.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-owl-month',
  templateUrl: './df-field-owl-month.component.html',
  styleUrls: ['./../../dynamic-form.component.scss'],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_MONTH_FORMATS },
  ]
})
export class DFFieldOwlMonthComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;

  formGroup!: FormGroup;
  owlDateTimeMonthStartView!: DateView;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
    this.owlDateTimeMonthStartView = DateView.MULTI_YEARS;
    this.type = new EventEmitter<any>();
    this.change = new EventEmitter<any>();
  }

  ngOnInit(): void { }

  public setOwlDateTimeMonthYear(selectedMonthYear: object, monthpicker: OwlDateTimeComponent<object>): void {
    monthpicker.close();
    this.formGroup.get(this.field?.field_name)?.setValue(selectedMonthYear);
    this.onChange(selectedMonthYear);
  }

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }

}
