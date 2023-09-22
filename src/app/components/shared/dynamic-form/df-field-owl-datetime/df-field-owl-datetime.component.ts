import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DFFieldOwlDatetimeMode } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-owl-datetime',
  templateUrl: './df-field-owl-datetime.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldOwlDatetimeComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() value!: any;

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

  ngOnInit(): void { }

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }

}
