import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DateView, OwlDateTimeComponent, OWL_DATE_TIME_FORMATS, OwlDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { OWL_NATIVE_DATE_FORMATS } from 'src/app/services/app-general.service';

@Component({
  selector: 'app-owl-time-range-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, OwlDateTimeModule],
  templateUrl: './owl-time-range-picker.component.html',
  styleUrls: ['./owl-time-range-picker.component.scss'],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_FORMATS },
  ]
})
export class OwlTimeRangePickerComponent implements OnInit {

  // `appearance` Input from datetime main component
  @Input() appearance!: MatFormFieldAppearance;

  // `color` Input from datetime main component
  @Input() color!: string;

  // `labelText` Input from datetime main component
  @Input() labelText!: any;

  // `placeholderText` Input from datetime main component
  @Input() placeholderText!: any;

  @Input() owlFieldControl!: UntypedFormControl;

  owlDateTimeMonthStartView!: DateView;

  result!: string;

  constructor() { }

  ngOnInit(): void {
    this.labelText = this.labelText || 'Choose a date';
    this.placeholderText = this.placeholderText || 'Choose a date';
    this.result = this.result || '';
    this.owlDateTimeMonthStartView = DateView.MULTI_YEARS;
  }

  public setOwlDateTimeYear(selectedMonthYear: object, yearpicker: OwlDateTimeComponent<object>): void {
    yearpicker.close();

    this.owlFieldControl.setValue(selectedMonthYear);
  }

}