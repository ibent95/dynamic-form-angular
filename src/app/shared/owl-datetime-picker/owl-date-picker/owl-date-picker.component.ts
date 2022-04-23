import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-owl-date-picker',
  templateUrl: './owl-date-picker.component.html',
  styleUrls: ['./owl-date-picker.component.scss']
})
export class OwlDatePickerComponent implements OnInit {

  // `appearance` Input from datetime main component
  @Input() appearance!: MatFormFieldAppearance;

  // `color` Input from datetime main component
  @Input() color!: string;

  // `labelText` Input from datetime main component
  @Input() labelText!: any;

  // `placeholderText` Input from datetime main component
  @Input() placeholderText!: any;

  @Input() owlFieldControl!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.labelText = this.labelText || 'Choose a date';
    this.placeholderText = this.placeholderText || 'Choose a date';
  }

}