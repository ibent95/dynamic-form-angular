import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-core',
	template: `
		<mat-drawer-container class="drawer-container">
			<mat-drawer mode="side">
				<app-sidebar [routeMap]="routeMap" [isSidebarOpen]="isSidebarOpen" (sidebarCloseToggleClick)="onSidebarCloseToggleClick($event)"></app-sidebar>
			</mat-drawer>

			<mat-drawer-content>
				<app-header [routeMap]="routeMap" [isSidebarOpen]="isSidebarOpen" (sidebarToggleClick)="onHeaderSidebarToggleClick($event)"></app-header>

				<app-content [routeMap]="routeMap"></app-content>

				<app-footer [routeMap]="routeMap"></app-footer>
			</mat-drawer-content>
		</mat-drawer-container>
	`,
	styles: ['.drawer-container { height: 100%; width: 100%; }']
})
export class CoreComponent implements OnInit, AfterViewInit {
	routeMap!: string[];
	isSidebarOpen: boolean;

	@ViewChild(MatDrawer) sidebar!: MatDrawer;

	constructor(
		public router: Router,
		private cdr: ChangeDetectorRef,
		private breakpointObserver: BreakpointObserver,
	) {
		this.isSidebarOpen = true;
	}

	ngOnInit(): void {
		this.routeMap = this.router.url.split('/');
		this.routeMap.shift(); // To remove empty string in first object

		this.subscribeRouterEvents();
	}

	ngAfterViewInit() {

		// Check if display width is small or mobile version, so it can change isSideBarOpen
		this.breakpointObserver.observe(["(max-width: 800px)"]).subscribe((response: any) => {
			this.isSidebarOpen = (!response.matches);

			if (this.isSidebarOpen) {
				this.sidebar.open();
			} else {
				this.sidebar.close();
			}
		});

		this.cdr.detectChanges();
	}

	private subscribeRouterEvents() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.routeMap = this.router.url.split('/');
				this.routeMap.shift(); // To remove empty string in first object
			}
		});
	}

	public onSidebarCloseToggleClick(data: boolean) {
		this.isSidebarOpen = data;
		this.sidebar.close();
	}

	public onHeaderSidebarToggleClick(data: boolean) {
		this.isSidebarOpen = data;
		this.sidebar.open();
	}

}
