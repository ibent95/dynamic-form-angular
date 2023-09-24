import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <mat-toolbar>
        <ng-container *ngIf="!isSidebarOpen">
          <button mat-icon-button color="accent" aria-label="Sidebar button" (click)="onSidebarToggleClick()">
            <mat-icon>menu</mat-icon>
          </button>

          <button mat-button>ibent95</button>
        </ng-container>

        <!--<ng-container>
          <button mat-button [matMenuTriggerFor]="animals">Animal index</button>
          <mat-menu #animals="matMenu">
            <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
            <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
          </mat-menu>

          <mat-menu #vertebrates="matMenu">
            <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
            <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
            <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
            <button mat-menu-item>Birds</button>
            <button mat-menu-item>Mammals</button>
          </mat-menu>

          <mat-menu #invertebrates="matMenu">
            <button mat-menu-item>Insects</button>
            <button mat-menu-item>Molluscs</button>
            <button mat-menu-item>Crustaceans</button>
            <button mat-menu-item>Corals</button>
            <button mat-menu-item>Arachnids</button>
            <button mat-menu-item>Velvet worms</button>
            <button mat-menu-item>Horseshoe crabs</button>
          </mat-menu>

          <mat-menu #fish="matMenu">
            <button mat-menu-item>Baikal oilfish</button>
            <button mat-menu-item>Bala shark</button>
            <button mat-menu-item>Ballan wrasse</button>
            <button mat-menu-item>Bamboo shark</button>
            <button mat-menu-item>Banded killifish</button>
          </mat-menu>

          <mat-menu #amphibians="matMenu">
            <button mat-menu-item>Sonoran desert toad</button>
            <button mat-menu-item>Western toad</button>
            <button mat-menu-item>Arroyo toad</button>
            <button mat-menu-item>Yosemite toad</button>
          </mat-menu>

          <mat-menu #reptiles="matMenu">
            <button mat-menu-item>Banded Day Gecko</button>
            <button mat-menu-item>Banded Gila Monster</button>
            <button mat-menu-item>Black Tree Monitor</button>
            <button mat-menu-item>Blue Spiny Lizard</button>
            <button mat-menu-item disabled>Velociraptor</button>
          </mat-menu>
        </ng-container>

        <ng-container>
          3
        </ng-container>-->
      </mat-toolbar>

    </header>
  `,
  styles: ['button { margin-top: 9px; }']
})
export class HeaderComponent implements OnInit {
  @Input() routeMap!: string[];
  @Input() isSidebarOpen!: boolean;
  @Output() sidebarToggleClick: EventEmitter<boolean> = new EventEmitter(true);
  environment: any;

  ngOnInit(): void {
    this.environment = environment;
  }

  public onSidebarToggleClick() {
    this.sidebarToggleClick.emit(true);
  }

}
