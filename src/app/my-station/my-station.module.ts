import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyStationRoutingModule } from './my-station-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyStationRoutingModule,
    CommonModule,
    FormsModule,
    MatTableModule
  ]
})
export class MyStationModule { }
