import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-page-blank',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatProgressBarModule],
  templateUrl: './page-blank.component.html',
  styleUrls: ['./page-blank.component.scss']
})
export class PageBlankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
