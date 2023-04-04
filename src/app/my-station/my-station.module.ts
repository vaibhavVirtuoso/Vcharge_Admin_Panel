import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyStationRoutingModule } from './my-station-routing.module';
import { ConnectorsComponent } from './connectors/connectors.component';

@NgModule({
  declarations: [
  
    ConnectorsComponent
  ],
  imports: [
    CommonModule,
    MyStationRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class MyStationModule { }
