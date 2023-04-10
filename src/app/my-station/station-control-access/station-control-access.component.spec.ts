import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationControlAccessComponent } from './station-control-access.component';

describe('StationControlAccessComponent', () => {
  let component: StationControlAccessComponent;
  let fixture: ComponentFixture<StationControlAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationControlAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationControlAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
