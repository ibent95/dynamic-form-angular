import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppService, AppServiceType } from 'src/app/services/app.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html', providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  serverResponse!: { message: string | null, date: string | null } | null;

  // Location resources
  isLocationSupported!: boolean;
  geolocation: any;
  latitude: any;
  longitude: any;

  constructor(
    private appSvc: AppService,
    private locationSvc: Location
  ) { }

  ngOnInit(): void {
    this.serverResponse = null;

    this.getServerInfo();
    this.getCurrentLocation();
  }

  private getServerInfo(): void {
    this.appSvc.list(AppServiceType.ROOT).subscribe(response => {
      this.serverResponse = response['data'];
    });
  }

  private getCurrentLocation(): void {
    this.isLocationSupported = false;
    const params = "";
    this.appSvc.getIPAddress().subscribe((response: any) => {
      console.log('IP Location', response);

      if (!response.ip) {
        return;
      }

      if (!navigator.geolocation) {
        alert("Geolocation is not supported by this browser.");
        return;
      }

      this.isLocationSupported = true;
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          if (position) {
            this.geolocation = position;
            console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            console.log(this.latitude);
            console.log(this.longitude);
          }
        },
        (error: GeolocationPositionError) => console.log(error)
      );
    });

  }

}