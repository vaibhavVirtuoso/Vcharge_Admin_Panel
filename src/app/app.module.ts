import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyStationComponent } from './my-station/my-station.component';
import { EarningsComponent } from './earnings/earnings.component';
import {BookingComponent} from "./booking/booking.component"
import { PaymentsComponent } from './payments/payments.component';
import { SettlementsComponent } from './settlements/settlements.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { SupportStatusComponent } from './support-status/support-status.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';
import {AddStationComponent} from './my-station/add-station/add-station.component';
import { StationControlAccessComponent } from './my-station/station-control-access/station-control-access.component';
import {ConnectorsComponent} from './my-station/charging-station/connectors/connectors.component';
import {ChargerSettingComponent} from './my-station/charging-station/charger-setting/charger-setting.component'
import {ConnectorSettingComponent} from './my-station/charging-station/connectors/connector-setting/connector-setting.component'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProfileComponent } from './profile/profile.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {NgModel,NgForm} from '@angular/forms';
import { ChargingStationComponent } from './my-station/charging-station/charging-station.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatConfirmDialogComponent } from './my-station/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { AddSationComponent } from './my-station/charging-station/add-sation/add-sation.component';
import { MatMessageDialogComponent } from './my-station/charging-station/mat-message-dialog/mat-message-dialog.component';
import { MystationService } from './service/station/mystation.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    MyStationComponent,
    EarningsComponent,
    BookingComponent,
    PaymentsComponent,
    SettlementsComponent,
    DownloadsComponent,
    SupportStatusComponent,
    SublevelMenuComponent,
    HeaderComponent,
    ProfileComponent,
    ChargingStationComponent,
    BankDetailsComponent,
    AddStationComponent,
    StationControlAccessComponent,
    ConnectorsComponent,
    ChargerSettingComponent,
    ConnectorSettingComponent,
    AddSationComponent,
    MyStationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxMaterialTimepickerModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent, MatMessageDialogComponent]
})
export class AppModule { }
