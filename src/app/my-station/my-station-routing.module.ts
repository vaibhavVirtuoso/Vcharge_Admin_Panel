import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingStationComponent } from './charging-station/charging-station.component';

const routes: Routes = [
  {
    path: 'charging-station',
    component: ChargingStationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStationRoutingModule { }
