import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() routeMap!: string[];
  environment: any;

  constructor() { }

  ngOnInit(): void {
    this.environment = environment;
    console.log('load');
  }

}
