import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
title: string;
message: string;
}
@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent {
  dialogData:DialogData | undefined;
  title:string="";
  message:string= '';

  constructor(public dialogRef: MatDialogRef<MatConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) {
    this.title=data.title;
    this.message=data.message;
  }
 
  ngOnInit(){ }

  onConfirm(){
    //close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void{
    //close the dialog, return true
    this.dialogRef.close(false);
  }
}
