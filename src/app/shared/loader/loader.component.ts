import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <mat-progress-spinner class="item-center" [color]="'accent'" [mode]="'indeterminate'"></mat-progress-spinner>

    <ng-container *ngIf="!messages">
      <span class="item-center" [innerHTML]="'Loading data...'"></span>
    </ng-container>

    <ng-container *ngIf="(messages && (messagesType !== 'array'))">
      <span class="item-center" [innerHTML]="messages"></span>
    </ng-container>

    <ng-container *ngIf="(messages && (messagesType === 'array'))">
      <ul class="item-center"> <li *ngFor="let message of messages;" [innerHTML]="message"></li> </ul>
    </ng-container>
  `,
  styles: ['mat-progress-spinner { margin-bottom: 8px; } .item-center { text-align: center; display: block; margin-left: auto; margin-right: auto; }'],
})
export class LoaderComponent implements OnInit {

  @Input() messages!: any;
  messagesType!: string;

  ngOnInit(): void {
    this.messagesType = typeof this.messages;
  }

}
