import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom-modal-publication-exit-form-confirm',
  template: `
    <div class="modal-body text-center">
      <h4 class="modal-title mt-2" [innerHTML]="title"></h4>
      <p class="pt-2" [innerHTML]="messages"></p>

      <div class="d-grid gap-2 d-md-block mt-4">
        <button class="btn btn-outline-secondary btn-sm" (click)="onClose()" [innerHTML]="cancelButtonText"></button>
        <button class="btn btn-warning btn-sm" (click)="onClose('draft')" [innerHTML]="draftButtonText"></button>
        <button class="btn btn-primary btn-sm" (click)="onClose(true)" [innerHTML]="proceedButtonText"></button>
      </div>
    </div>
  `,
  styles: ['']
})
export class CustomModalPublicationExitFormConfirmComponent {

  title!: string;
  messages!: string;
  cancelButtonText!: string;
  draftButtonText!: string;
  proceedButtonText!: string;

  closeState!: Subject<any>;

  constructor(
    private bsModalRef: BsModalRef
  ) {
    this.closeState = new Subject<any>();
  }

  public onClose(data: 'draft' | true | null = null) {
    this.closeState.next(data);
    this.bsModalRef.hide();
  }

}
