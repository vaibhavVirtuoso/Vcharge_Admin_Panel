import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConnectorsService } from 'src/app/service/connector/connectors.service';
import { ConnectorsComponent } from '../connectors.component';

@Component({
  selector: 'app-connector-setting',
  templateUrl: './connector-setting.component.html',
  styleUrls: ['./connector-setting.component.css']
})
export class ConnectorSettingComponent implements OnInit{
  addConnector:FormGroup;
  connectorId: any;
  stationId: any;
  chargerId: any;
  connectorType =[
    "Type A",
    "Type B",
    "Type C"
  ]
  connectorSocket =[
    "Socket A",
    "Socket B",
    "Socket C"
  ]

  constructor(private activeRoute: ActivatedRoute,private formBuilder: FormBuilder,private dialogRef: MatDialogRef<ConnectorSettingComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private connectors:ConnectorsService) {
    this.addConnector = this.formBuilder.group({
      connectorType: '',
      connectorSocket: '',
      connectorStatus: '',
      connectorOutputPower: '',
      connectorCharges: '',
    })
  }

  ngOnInit(): void {
    this.connectorId = this.activeRoute.snapshot.paramMap.get('connectorId');
    this.addConnector.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.data){
      this.connectors.updatingConnector(this.data.connectorId,this.addConnector.value).subscribe((result) =>{
        console.warn(result);
      })

    }else{
      console.log(this.addConnector.value);      
      
    //   this.connectors.addConnector(this.addConnector.value,this.stationId,this.chargerId).subscribe((result:any) =>{
    //   console.warn(result);
    //   if(result){
    //     this.dialogRef.close(true);
    //   }
    // })
    }
    
  }

}
