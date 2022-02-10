import { AfterViewInit, Component, ContentChild, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

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

    console.log('route', this.router.url, this.router);
  }

  ngAfterViewInit(): void {
    if (this.routeIsExists) {

      console.log('routeConfig', this.dynamicRef, this.routeConfig['component'].name);

      const componentRef = this.dynamicRef?.createComponent<Component>(this.routeConfig['component']);
      //componentRef.instance;

      console.log('componentRef', componentRef);
    }
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