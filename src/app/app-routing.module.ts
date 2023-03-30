import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyStationComponent } from './my-station/my-station.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { BookingComponent, } from './booking/booking.component';
import { SettingModule } from './settings/setting.module';
import { SettingsComponent } from './settings/settings.component';
import { SettlementsComponent } from './settlements/settlements.component';
import { SupportStatusComponent } from './support-status/support-status.component';
import { EarningsComponent } from './earnings/earnings.component';
import { ChargingStationComponent } from './my-station/charging-station/charging-station.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'bank-details',
    component: BankDetailsComponent
  },
  {
    path:'my-station',
    component: MyStationComponent,
  },
  {
    path:'my-station/charging-station/:id',
    component: ChargingStationComponent,
  },
  {
    path:'earnings',
    component: EarningsComponent
  },
  {
    path:'booking',
    component:BookingComponent
  },
  {
    path:'payments',
    component: PaymentsComponent
  },
  {
    path:'settlements',
    component: SettlementsComponent
  },
  {
    path:'downloads',
    component: DownloadsComponent
  },
  {
    path:'support-status',
    component: SupportStatusComponent
  },
  {
    path:'settings',
    loadChildren: () => import('./settings/setting.module').then(m => m.SettingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
