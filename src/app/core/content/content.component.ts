import { AfterViewInit, Component, ContentChild, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  //template: '<router-outlet></router-outlet>',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {
  @Input() routeMap!: string[];

  routeIsExists!: boolean;

  routeConfig!: { [key: string]: any };

  @ViewChild('dynamicRef', { read: ViewContainerRef }) dynamicRef!: ViewContainerRef;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.routeIsExists = this.isRouteExists(this.routeMap);
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routeMap = this.router.url.split('/');
        this.routeMap.shift();

        this.routeIsExists = this.isRouteExists(this.routeMap);

        if (this.routeIsExists) {
          this.dynamicRef?.remove();
          this.dynamicRef?.createComponent((this.router.url === '/') ? MainComponent : this.routeConfig['component']);
        }
      }
    });
  }

  private isRouteExists(routeMap: string[]): boolean {
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