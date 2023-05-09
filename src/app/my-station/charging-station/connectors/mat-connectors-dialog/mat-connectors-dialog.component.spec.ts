import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConnectorsDialogComponent } from './mat-connectors-dialog.component';

describe('MatConnectorsDialogComponent', () => {
  let component: MatConnectorsDialogComponent;
  let fixture: ComponentFixture<MatConnectorsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatConnectorsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatConnectorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
