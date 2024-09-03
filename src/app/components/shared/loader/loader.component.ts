import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinner],
  template: `
    <mat-progress-spinner class="item-center" [color]="'accent'" [mode]="'indeterminate'"></mat-progress-spinner>

    @if (!messages) {
      <span class="item-center" [innerHTML]="'Loading data...'"></span>
    }

    @if (messages && (messagesType !== 'array')) {
      <span class="item-center" [innerHTML]="messages"></span>
    }

    @if (messages && (messagesType === 'array')) {
      <ul class="item-center"> <li *ngFor="let message of messages;" [innerHTML]="message"></li> </ul>
    }
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
