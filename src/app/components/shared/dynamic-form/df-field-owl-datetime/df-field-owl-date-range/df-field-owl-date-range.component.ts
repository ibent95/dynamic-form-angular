import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { OWL_DATE_TIME_FORMATS, DateView, OwlDateTimeComponent } from '@danielmoncada/angular-datetime-picker';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
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
  @Input() isShowDetail: boolean = false;

  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;

  formGroup!: FormGroup;
  owlDateTimeMonthStartView!: DateView;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form;
    this.owlDateTimeMonthStartView = DateView.MULTI_YEARS;
    this.type = new EventEmitter<any>();
    this.change = new EventEmitter<any>();
  }

  public setOwlDateTimeYear(selectedMonthYear: object, yearpicker: OwlDateTimeComponent<object>): void {
    yearpicker.close();
    this.formGroup.get(this.field?.field_name)?.setValue(selectedMonthYear);
  }

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }

}
