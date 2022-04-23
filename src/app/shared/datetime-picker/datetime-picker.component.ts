import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DateTime } from 'luxon';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class DatetimePickerComponent implements OnInit {

  // Datetime picker appearance of form
  @Input() appearance: MatFormFieldAppearance = 'fill';

  // Datetime picker text of label
  @Input() color: 'primary' | 'accent' | 'warn' = 'accent';

  // Datetime picker text of label
  @Input() label!: string | undefined | null;

  // Datetime picker text of placeholder
  @Input() placeholder!: string | undefined | null;

  // Datetime picker mode
  @Input() mode: 'date' | 'month' | 'year' | 'time' | 'datetime' = 'date';

  @Input() fieldControl!: FormControl;
  subscription$!: Subject<void>;

  constructor() { }

  ngOnInit(): void {
    this.fieldControl = this.fieldControl || new FormControl();
    this.subscription$ = new Subject<void>();

    this.label = this.label || null;
    this.placeholder = this.placeholder || null;

    this.subscribeToFormControlChange();
  }

  private subscribeToFormControlChange() {
    this.fieldControl.valueChanges.pipe(takeUntil(this.subscription$)).subscribe((value) => {
      switch (this.mode) {
        case 'month':
          console.log('change', (value instanceof DateTime), formatDate(value, 'yyyy-MM', 'en'));
          break;

        case 'year':
          console.log('change', (value instanceof DateTime), formatDate(value, 'yyyy', 'en'));
          break;

        case 'time':
          console.log('change', (value instanceof DateTime), formatDate(value, 'HH:mm:ss', 'en'));
          break;

        case 'datetime':
          console.log('change', (value instanceof DateTime), formatDate(value, 'yyyy-MM-dd HH:mm:ss', 'en'));
          break;

        default:
          console.log('change', (value instanceof DateTime), formatDate(value, 'yyyy-MM-dd', 'en'));
          break;
      }
    });
  }

  // Function to call when the datetime changes.
  private onDatetimeChange = (datetime: any) => { };

}