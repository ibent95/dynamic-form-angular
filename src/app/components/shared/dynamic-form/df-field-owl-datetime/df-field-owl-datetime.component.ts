import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFFieldOwlDatetimeMode } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { AppService } from 'src/app/services/app.service';
import { DFFieldOwlDateComponent } from './df-field-owl-date/df-field-owl-date.component';
import { DFFieldOwlDateRangeComponent } from './df-field-owl-date-range/df-field-owl-date-range.component';
import { DFFieldOwlDateTimeComponent } from './df-field-owl-date-time/df-field-owl-date-time.component';
import { DFFieldOwlDateTimeRangeComponent } from './df-field-owl-date-time-range/df-field-owl-date-time-range.component';
import { DFFieldOwlMonthComponent } from './df-field-owl-month/df-field-owl-month.component';
import { DFFieldOwlTimeComponent } from './df-field-owl-time/df-field-owl-time.component';
import { DFFieldOwlTimeRangeComponent } from './df-field-owl-time-range/df-field-owl-time-range.component';
import { DFFieldOwlYearComponent } from './df-field-owl-year/df-field-owl-year.component';

@Component({
  selector: 'df-field-owl-datetime',
  standalone: true,
  imports: [CommonModule, DFFieldOwlDateComponent, DFFieldOwlDateRangeComponent, DFFieldOwlDateTimeComponent, DFFieldOwlDateTimeRangeComponent, DFFieldOwlMonthComponent, DFFieldOwlTimeComponent, DFFieldOwlTimeRangeComponent, DFFieldOwlYearComponent],
  templateUrl: './df-field-owl-datetime.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldOwlDatetimeComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;
  @Input() isShowDetail: boolean = false;

  // Datetime picker mode
  @Input() mode!: DFFieldOwlDatetimeMode | string;

  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;

  formGroup: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form;
    this.mode = this.mode || DFFieldOwlDatetimeMode.DATE;
    this.type = new EventEmitter<any>();
    this.change = new EventEmitter<any>();
  }

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }

}
