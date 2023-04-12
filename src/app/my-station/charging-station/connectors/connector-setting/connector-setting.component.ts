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
    this.stationId = this.data.stationId;
    this.chargerId = this.data.chargerId;
    console.log(this.stationId);
    console.log(this.chargerId);
    console.log(this.data);
    
  }

  // getConnectorDetails(sId:any,cId:any){
  //   this.connectors.getConnector(sId,cId);
  // }

  onFormSubmit(){
    if(this.data.connectorId){
      this.connectors.updatingConnector(this.data.connectorId,this.addConnector.value).subscribe((result) =>{
        console.warn(result);
      })
    }else{         
      this.connectors.addConnector(this.addConnector.value,this.stationId,this.chargerId);
      this.dialogRef.close(true);
      // this.getConnectorDetails(this.stationId,this.chargerId);
    }
    
  }

}
