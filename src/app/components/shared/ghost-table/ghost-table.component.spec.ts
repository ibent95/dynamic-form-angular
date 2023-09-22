import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTableComponent } from './ghost-table.component';

describe('GhostTableComponent', () => {
  let component: GhostTableComponent;
  let fixture: ComponentFixture<GhostTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
