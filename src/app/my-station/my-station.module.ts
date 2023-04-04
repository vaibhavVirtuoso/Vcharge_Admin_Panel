import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyStationRoutingModule } from './my-station-routing.module';
import { ConnectorSettingComponent } from './charging-station/connectors/connector-setting/connector-setting.component';
import { ChargerSettingComponent } from './charging-station/charger-setting/charger-setting.component';

@NgModule({
  declarations: [

  
    ConnectorSettingComponent,
         ChargerSettingComponent
  ],
  imports: [
    CommonModule,
    MyStationRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class MyStationModule { }
