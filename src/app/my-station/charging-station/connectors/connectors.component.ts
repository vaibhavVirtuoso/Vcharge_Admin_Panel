import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectorsService } from 'src/app/service/connector/connectors.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConnectorSettingComponent } from './connector-setting/connector-setting.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { ChargerSettingComponent } from '../charger-setting/charger-setting.component';
import { DeleteConnectorsService } from 'src/app/service/connector/delete-connectors.service';
import { MatConnectorsDialogComponent } from './mat-connectors-dialog/mat-connectors-dialog.component';
import { DialogService } from 'src/app/service/station/dialog.service';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css']
})
export class ConnectorsComponent implements OnInit{
  stationId: any;
  chargerId: any;
  openForm:boolean = false;

  displayedColumns: string[] = [ 'connectorNumber', 'connectorType','connectorSocket','connectorStatus','connectorOutputPower', 'menu'];
  dataSource!: MatTableDataSource<any>;

  constructor(private activeRoute: ActivatedRoute,private connector:ConnectorsService, private myConnector:ConnectorsService, private route:Router,private dialog:MatDialog, private deleteService:DeleteConnectorsService, private dialogService:DialogService){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
        this.stationId = this.activeRoute.snapshot.paramMap.get('stationId');
        this.chargerId = this.activeRoute.snapshot.paramMap.get('chargerId');
        console.warn(this.stationId);
        console.warn(this.chargerId);
        this.getConnectorUsingIds(this.stationId,this.chargerId);
  }

  getConnectorUsingIds(stationById: any,chargerById: any){
    this.connector.getConnector(stationById,chargerById).subscribe({
      next: (res:any) => {
        console.warn(res);
        
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
        // counting the connectors
        this.dataSource.data = res.map((charger: {connectors: any [];}) => ({
          ...charger,
          totalConnectors: charger.connectors.length,
          activeConnectors: charger.connectors.filter((connectors: {active:boolean; }) => connectors.active == true).length,
          inactiveConnectors: charger.connectors.filter((connectors: {active:boolean; }) => connectors.active == false).length

        }));
        
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onUpdateConnector(data: any){
    const dialogRef = this.dialog.open(ConnectorSettingComponent,{
      data,
    })

    dialogRef.afterClosed().subscribe({
      next: (val:any) => {
        if(val){
          this.getConnectorUsingIds(this.stationId,this.chargerId);
        }
      }
    })                     
    
  }

  onDeleteConnector(connectorId:any){
    //console.warn("delete");
    //this.deleteService.openConfirmDialog()
  
    const dialogRef = this.dialog.open(MatConnectorsDialogComponent, {

      maxWidth: "400px",

      data: {

        title: "Are you sure?",

        message: "Are you sure you want to delete user "

      }

    });




    // listen to response

    dialogRef.afterClosed().subscribe((dialogResult: any) => {
      if (dialogResult) {

        this.myConnector.deleteConnectorById(connectorId).subscribe((result: any) => {
          console.log(result)
         

        })

      }
      // if user pressed yes dialogResult will be true,

      // if he pressed no - it will be false

      console.log(dialogResult);
      window.location.reload();


    });
  }

  openDialogBox(){
    const dialogRef = new MatDialogConfig();
    dialogRef.data = {
      stationId: this.stationId,
      chargerId: this.chargerId
    };
  
    this.dialog.open(ConnectorSettingComponent,dialogRef)
    this.getConnectorUsingIds(this.stationId,this.chargerId);
  }

  openConnectorSetting(id: any){
    this.route.navigate([`my-station/charging-station/${this.stationId}/connector/${this.chargerId}/connector-setting`,id])
  }
}



