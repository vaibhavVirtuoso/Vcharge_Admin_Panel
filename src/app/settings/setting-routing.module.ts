import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { PaymentSettingComponent } from './payment-setting/payment-setting.component';
import { SecuritySettingComponent } from './security-setting/security-setting.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: 'accountSetting',
    component: SettingsComponent
  },
  {
    path: 'securitySetting',
    component: SecuritySettingComponent
  },
  {
    path: 'paymentSetting',
    component: PaymentSettingComponent
  },
  {
    path: 'notificationSetting',
    component: NotificationSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
