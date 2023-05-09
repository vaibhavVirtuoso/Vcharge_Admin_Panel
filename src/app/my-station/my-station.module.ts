import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyStationRoutingModule } from './my-station-routing.module';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatMessageDialogComponent } from './charging-station/mat-message-dialog/mat-message-dialog.component';


@NgModule({
  declarations: [
  
  
    MatConfirmDialogComponent,
           MatMessageDialogComponent,
  ],
  imports: [
    CommonModule,
    MyStationRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class MyStationModule { }
