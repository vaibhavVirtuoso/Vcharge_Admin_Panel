import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSationComponent } from './add-sation.component';

describe('AddSationComponent', () => {
  let component: AddSationComponent;
  let fixture: ComponentFixture<AddSationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
