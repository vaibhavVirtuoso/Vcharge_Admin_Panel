import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectorSettingComponent } from './connector-setting.component';

describe('ConnectorSettingComponent', () => {
  let component: ConnectorSettingComponent;
  let fixture: ComponentFixture<ConnectorSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectorSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectorSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
