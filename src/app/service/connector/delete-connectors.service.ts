import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConnectorsDialogComponent } from 'src/app/my-station/charging-station/connectors/mat-connectors-dialog/mat-connectors-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteConnectorsService {

  constructor(private dialog:MatDialog ) { }
  // openConfirmDialog(){
  //   this.dialog.open(MatConnectorsDialogComponent, {
  //     width:'390px',
  //     disableClose:true
  //   })
  // }
}
