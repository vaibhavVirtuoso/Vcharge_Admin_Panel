import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message:string;
}
@Component({
  selector: 'app-mat-message-dialog',
  templateUrl: './mat-message-dialog.component.html',
  styleUrls: ['./mat-message-dialog.component.css']
})
export class MatMessageDialogComponent {
  
  dialogData:DialogData | undefined;
  title:string="";
  message:string="";

  constructor(public dialogRef: MatDialogRef<MatMessageDialogComponent>,
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
