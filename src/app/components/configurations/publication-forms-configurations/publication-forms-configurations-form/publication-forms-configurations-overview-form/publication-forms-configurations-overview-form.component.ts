import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-publication-forms-configurations-overview-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule],
  templateUrl: './publication-forms-configurations-overview-form.component.html',
  styles: ['table { text-align: justify; tbody tr td { vertical-align: top; } td:nth-child(1) { width: 20%; padding-right: 10px; } td:nth-child(2) { width: 1px; } }'],
})
export class PublicationFormsConfigurationsOverviewFormComponent implements OnInit {

  @Input() initialForm!: FormGroup;
  @Input() generalForm!: FormGroup;
  @Input() advancedForm!: FormGroup;
  @Input() otherData!: {
    selectedPublicationFormVersion: any,
    selectedPublicationFieldType: any,
    selectedPublicationFormParent: any,
  };

  @Input() selectOptions!: any;

  initialFormValue!: any;
  generalFormValue!: any;
  advancedFormValue!: any;

  acceptTermsConditions!: boolean;

  @Output() onAcceptTermsConditionsChange: EventEmitter<any> = new EventEmitter<any>(true);

  constructor() {
    this.acceptTermsConditions = false;
  }

  ngOnInit(): void {
    this.initialFormValue = this.initialForm.getRawValue();
    this.generalFormValue = this.generalForm.getRawValue();
    this.advancedFormValue = this.advancedForm.getRawValue();

    this.subscribeToAllFormValueChanges();
  }

  private subscribeToAllFormValueChanges(): void {
    this.initialForm.valueChanges.subscribe((changes: any) => {
      this.initialFormValue = this.initialForm.getRawValue();
    });

    this.generalForm.valueChanges.subscribe((changes: any) => {
      this.generalFormValue = this.generalForm.getRawValue();
    });

    this.advancedForm.valueChanges.subscribe((changes: any) => {
      this.advancedFormValue = this.advancedForm.getRawValue();
    });
  }

  onAcceptTermsConditionsCheck(data: any): void {
    this.onAcceptTermsConditionsChange.next(this.acceptTermsConditions);
  }

}
