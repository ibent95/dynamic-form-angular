import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFControlValueAccessor, DFField } from 'src/app/interfaces/df-field';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-text',
  templateUrl: './df-field-text.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldTextComponent implements OnInit {

  @Input() field!: DFField;
  @Input() appearence!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  constructor(
    private controlContainer: ControlContainer,
    private appSvc: AppService,
  ) { }

  ngOnInit(): void { }

}
