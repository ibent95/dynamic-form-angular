import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-owl-datetime-picker',
  templateUrl: './owl-datetime-picker.component.html',
  styleUrls: ['./owl-datetime-picker.component.scss']
})
export class OwlDatetimePickerComponent implements OnInit {

  // Datetime picker appearance of form
  @Input() appearance: MatFormFieldAppearance = 'fill';

  // Datetime picker text of label
  @Input() color: 'primary' | 'accent' | 'warn' = 'accent';

  // Datetime picker text of label
  @Input() label!: string | undefined | null;

  // Datetime picker text of placeholder
  @Input() placeholder!: string | undefined | null;

  // Datetime picker mode
  @Input() mode: 'date' | 'month' | 'year' | 'time' | 'datetime' | 'daterange' | 'timerange' | 'datetimerange' = 'date';

  @Input() owlFieldControl!: FormControl;
  subscription$!: Subject<void>;

  constructor() { }

  ngOnInit(): void {
    this.owlFieldControl = this.owlFieldControl || new FormControl();
    this.subscription$ = new Subject<void>();

    this.label = this.label || null;
    this.placeholder = this.placeholder || null;

    this.subscribeToFormControlChange();
  }

  private subscribeToFormControlChange() {
    this.owlFieldControl.valueChanges.pipe(takeUntil(this.subscription$)).subscribe((value) => {
      switch (this.mode) {
        case 'month':
          console.log('change', (typeof value === 'object'), formatDate(value, 'yyyy-MM', 'en'));
          break;

        case 'year':
          console.log('change', (typeof value === 'object'), formatDate(value, 'yyyy', 'en'));
          break;

        case 'time':
          console.log('change', (typeof value === 'object'), formatDate(value, 'HH:mm:ss', 'en'));
          break;

        case 'datetime':
          console.log('change', (typeof value === 'object'), formatDate(value, 'yyyy-MM-dd HH:mm:ss', 'en'));
          break;

        case 'daterange':
          console.log('value', (typeof value), value);
          console.log('daterange 1', (typeof value[0] === 'object'), formatDate(value[0], 'yyyy-MM-dd', 'en'));
          console.log('daterange 2', (typeof value[1] === 'object'), formatDate(value[1], 'yyyy-MM-dd', 'en'));
          break;

        case 'timerange':
          console.log('value', (typeof value), value);
          console.log('daterange 1', (typeof value[0] === 'object'), formatDate(value[0], 'HH:mm:ss', 'en'));
          console.log('daterange 2', (typeof value[1] === 'object'), formatDate(value[1], 'HH:mm:ss', 'en'));
          break;

        case 'datetimerange':
          console.log('value', (typeof value), value);
          console.log('daterange 1', (typeof value[0] === 'object'), formatDate(value[0], 'yyyy-MM-dd HH:mm:ss', 'en'));
          console.log('daterange 2', (typeof value[1] === 'object'), formatDate(value[1], 'yyyy-MM-dd HH:mm:ss', 'en'));
          break;

        default:
          console.log('change', (typeof value === 'object'), formatDate(value, 'yyyy-MM-dd', 'en'));
          break;
      }
    });
  }

  // Function to call when the datetime changes.
  private onDatetimeChange = (datetime: any) => { };

}