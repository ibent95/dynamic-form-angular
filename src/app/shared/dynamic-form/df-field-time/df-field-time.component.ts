import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFField } from 'src/app/interfaces/df-field';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-time',
  templateUrl: './df-field-time.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldTimeComponent {

  @Input() field!: DFField;
  @Input() appearence!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

  formGroup!: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form as FormGroup;
  }

  ngOnInit(): void { }

}
