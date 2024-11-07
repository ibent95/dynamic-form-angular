import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	//template: '<router-outlet></router-outlet>',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {

	/**
	 * This is component for manage load of content.
	 * There are two init function to load content:
	 * 1) ngOnInit : first`s execute function after this component is fully initialized (1 time executed)
	 * 2) ngAfterViewInit : function that execute after view of this component is fully initialized (after ngOnInit
	 *	  and executed many times).
	 * In both functions there is route checking, if the route is registered in the route list
	 * it will fetch the component data of the route and will be injected into the dynamic reference (ViewContainerRef).
	 */

	@Input() routeMap!: string[];

	isRouteExists!: boolean;
	isRootRoute!: boolean;

	windowNavigation!: PerformanceNavigationTiming;
	routeConfig!: { [key: string]: any };

	@ViewChild('dynamicRef', { read: ViewContainerRef }) dynamicRef!: ViewContainerRef;

	constructor(
		public router: Router,
	) { }

	ngOnInit(): void {

		// Remove first slash (/) in route element
		this.routeMap = this.router.url.split('/');
		this.routeMap.shift();

		// Check if route is exist
		this.isRouteExists = this.checkRouteExists(this.routeMap);
		this.isRootRoute = (this.router.url === '/');
	}

	ngAfterViewInit(): void {

		// Router event change detector
		this.router.events
		.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
		.subscribe((event: NavigationEnd) => {

			// Remove first slash (/) in route element
			this.routeMap = this.router.url.split('/');
			this.routeMap.shift();

			// Check if route is exist
			this.isRouteExists = this.checkRouteExists(this.routeMap);
			this.isRootRoute = (this.router.url === '/');

			Promise.resolve().then(() => this.setDynamicReferenceContainerContent(this.isRouteExists, this.isRootRoute));
		});

		// Other condition or browser is reloaded or refreshed
		this.windowNavigation = <PerformanceNavigationTiming>window.performance.getEntriesByType("navigation")[0];

		// If browser is browser is reloaded or refreshed
		if (this.windowNavigation.type === 'reload') {
			Promise.resolve().then(() => this.setDynamicReferenceContainerContent(this.isRouteExists, this.isRootRoute));
		}
	}

	private setDynamicReferenceContainerContent(isRouteExists: boolean, isRootRoute: boolean, routeConfig?: any) {

		// If route is exist
		if (isRouteExists && !isRootRoute) {

			// Remove content in dynamic reference container
			this.dynamicRef?.remove();

			// Add content in dynamic reference container if the route is not root route ('/')
			this.dynamicRef?.createComponent(this.routeConfig['component']);

		}

	}

	private checkRouteExists(routeMap: string[]): boolean {
		let result = this.router.config.some((route) => route.path === routeMap[0])!;

		if (result) this.routeConfig = this.router.config.find((config, configIndex) => ((config.path === routeMap[0]) && config.children))!;

		if (this.routeMap && this.routeMap.length === 2) {
			const parentConfig = this.router.config.find((config, configIndex) => ((config.path === routeMap[0]) && config.children));
			result = parentConfig?.children?.some((route) => route.path === routeMap[1])!;

			if (result) this.routeConfig = parentConfig?.children?.find((config, configIndex) => config.path === routeMap[1])!;
		}

		return result || false;
	}

}