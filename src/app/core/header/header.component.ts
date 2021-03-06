import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() routeMap!: string[];
  environment: any;

  constructor() { }

  ngOnInit(): void {
    this.environment = environment;
  }

}
