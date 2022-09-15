import { Component, OnInit } from '@angular/core';
import { AppService, AppServiceType } from 'src/app/services/app.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  serverResponse!: { message: string | null, date: string | null } | null;

  constructor(
    private appSvc: AppService,
  ) { }

  ngOnInit(): void {
    this.serverResponse = null;

    this.getServerInfo();
  }

  private getServerInfo(): void {
    this.appSvc.list(AppServiceType.ROOT).subscribe(response => {
      this.serverResponse = response['data'];
    });
  }

}
