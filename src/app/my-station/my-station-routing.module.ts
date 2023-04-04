import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingStationComponent } from './charging-station/charging-station.component';
import { ConnectorsComponent } from './connectors/connectors.component';

const routes: Routes = [
  {
    path: 'charging-station/:id',
    component: ChargingStationComponent
  },
  {
    path: 'charging-station/:id/connectors/:id',
    component: ConnectorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStationRoutingModule { }
