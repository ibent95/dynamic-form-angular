import { Component, Input } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/interfaces/df-field';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-number',
  templateUrl: './df-field-number.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldNumberComponent {

  @Input() field!: DFField;
  @Input() appearence!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private appSvc: AppService,
  ) { }

  ngOnInit(): void { }

}
