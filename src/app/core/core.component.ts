import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ContentComponent } from "./content/content.component";

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

		this.subscribeRouterEvents();
	}

	private subscribeRouterEvents() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.routeMap = this.router.url.split('/');
				this.routeMap.shift(); // To remove empty string in first object
			}
		});
	}

}