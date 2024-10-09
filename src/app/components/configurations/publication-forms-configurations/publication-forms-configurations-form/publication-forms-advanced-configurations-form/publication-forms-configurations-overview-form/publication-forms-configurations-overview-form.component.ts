import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-publication-forms-configurations-overview-form',
  templateUrl: './publication-forms-configurations-overview-form.component.html',
  styleUrls: ['./publication-forms-configurations-overview-form.component.scss']
})
export class PublicationFormsConfigurationsOverviewFormComponent implements OnInit {

  @Input() initialForm!: FormGroup;
  @Input() generalForm!: FormGroup;
  @Input() advancedForm!: FormGroup;

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
