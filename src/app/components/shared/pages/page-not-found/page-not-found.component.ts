import { Component, inject, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styles: ``
})
export class PageNotFoundComponent implements OnInit {

  private location: Location = inject(Location);

  constructor() { }

  ngOnInit(): void { }

  public onBackButtonClick(): void {
    this.location.back();
  }

}
