import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="flex justify-center">
      <div class="text-center">
        <mat-progress-spinner [color]="'accent'" [mode]="'indeterminate'"></mat-progress-spinner>
          <span>Loading data</span>
      </div>
    </div>
  `,
  styles: [''],
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
