import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMessageDialogComponent } from 'src/app/my-station/charging-station/mat-message-dialog/mat-message-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor(private dialog:MatDialog) { }

  // openConfirmDialog(){
  //   this.dialog.open(MatMessageDialogComponent, {
  //     width:'390px',
  //     disableClose:true
  //   })
  // }
}
