import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhStatsComponent } from './gh-stats.component';

describe('GhStatsComponent', () => {
  let component: GhStatsComponent;
  let fixture: ComponentFixture<GhStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
