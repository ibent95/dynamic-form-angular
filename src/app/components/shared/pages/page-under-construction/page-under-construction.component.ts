import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-under-construction',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './page-under-construction.component.html',
  styleUrls: ['./page-under-construction.component.scss']
})
export class PageUnderConstructionComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void { }

  public onBackButtonClick(): void {
    this.location.back();
  }

}