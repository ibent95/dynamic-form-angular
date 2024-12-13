import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DFField } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { SelectOptionsGroup } from 'src/app/interfaces/select-options-group';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'df-field-select',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './df-field-select.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldSelectComponent {

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

  public onType(data: any) {
    this.change.emit(data);
  }

  public onChange(data: any) {
    this.change.emit(data);
  }

}
