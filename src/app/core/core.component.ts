import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  routeMap!: string[];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.routeMap = this.router.url.split('/');

    this.routeMap.shift(); // To remove empty string in first object
  }

}