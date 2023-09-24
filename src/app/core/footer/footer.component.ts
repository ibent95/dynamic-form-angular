import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="max-w-none m-7">
      <div class="footer-content center-content">
        <!-- © -->
        Copyright 2022, made by <a class="text-white" href="https://github.com/ibent95">ibent95</a>
      </div>
    </footer>
  `,
  styles: [
    'footer { position: absolute; right: 0; margin: 0; padding: 0; width: 100%; }',
    '::ng-deep .footer-content { margin: 0; padding: 5px 50px 5px; }',
    '::ng-deep .center-content { justify-content: center; display: flex; }'
  ]
})
export class FooterComponent {
  @Input() routeMap!: string[];
}
