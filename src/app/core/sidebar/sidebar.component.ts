import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    'div.top-sidebar-content { margin-top: 10px !important; }',
    'a.btn, a.btn-link { padding-top: 11px; color: #e5e7eb; }'
  ]
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
