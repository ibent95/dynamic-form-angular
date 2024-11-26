import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxSelectModule } from 'ngx-select-ex';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { SelectOptionsGroup } from 'src/app/interfaces/select-options-group';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-ngx-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgxSelectModule],
  templateUrl: './df-field-ngx-select.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldNGXSelectComponent {

  @Input() field!: DFField;
  @Input() appearance!: MatFormFieldAppearance;
  @Input() color!: ThemePalette;
  @Input() options!: SelectOptionsGroup;
  @Input() value!: any;
  @Input() isShowDetail: boolean = false;

  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;

  formGroup!: FormGroup;

  constructor(
    private parentFormGroup: FormGroupDirective,
    private appSvc: AppService,
  ) {
    this.formGroup = this.parentFormGroup.form;
    this.type = new EventEmitter<any>();
    this.change = new EventEmitter<any>();
  }

  onSelectionChanges(data: any) { }

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }


}
