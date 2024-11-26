import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule],
  templateUrl: './sidebar.component.html',
  styles: [
    'div.top-sidebar-content { margin-top: 10px !important; }',
    'a.btn, a.btn-link { padding-top: 11px; color: #e5e7eb; }'
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent implements OnInit {
  @Input() routeMap!: string[];
  @Input() isSidebarOpen!: boolean;
  @Output() sidebarCloseToggleClick: EventEmitter<boolean> = new EventEmitter(false);
  environment: any;

  ngOnInit(): void {
    this.environment = environment;
  }

  public onSidebarCloseToggleClick() {
    this.sidebarCloseToggleClick.emit(false);
  }

}
