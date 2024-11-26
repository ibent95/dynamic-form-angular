import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
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
