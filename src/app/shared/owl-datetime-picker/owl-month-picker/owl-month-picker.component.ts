import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DateView, OwlDateTimeComponent } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-owl-month-picker',
  templateUrl: './owl-month-picker.component.html',
  styleUrls: ['./owl-month-picker.component.scss']
})
export class OwlMonthPickerComponent implements OnInit {

  // `appearance` Input from datetime main component
  @Input() appearance!: MatFormFieldAppearance;

  // `color` Input from datetime main component
  @Input() color!: string;

  // `labelText` Input from datetime main component
  @Input() labelText!: any;

  // `placeholderText` Input from datetime main component
  @Input() placeholderText!: any;

  @Input() owlFieldControl!: FormControl;

  owlDateTimeMonthStartView!: DateView;

  result!: string;

  constructor() { }

  ngOnInit(): void {
    this.labelText = this.labelText || 'Choose a date';
    this.placeholderText = this.placeholderText || 'Choose a date';
    this.result = this.result || '';
    this.owlDateTimeMonthStartView = DateView.MULTI_YEARS;
  }

  public setOwlDateTimeMonthYear(selectedMonthYear: object, monthpicker: OwlDateTimeComponent<object>): void {
    monthpicker.close();

    this.owlFieldControl.setValue(selectedMonthYear);
  }

}