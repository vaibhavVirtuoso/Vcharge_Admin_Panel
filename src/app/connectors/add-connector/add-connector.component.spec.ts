import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConnectorComponent } from './add-connector.component';

describe('AddConnectorComponent', () => {
  let component: AddConnectorComponent;
  let fixture: ComponentFixture<AddConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConnectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
