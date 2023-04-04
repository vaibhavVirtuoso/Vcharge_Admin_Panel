import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectorsService } from 'src/app/service/connector/connectors.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css']
})
export class ConnectorsComponent implements OnInit{
  stationId: any;
  chargerId: any;

  displayedColumns: string[] = [ 'connectorNumber', 'connectorType','connectorSocket','connectorStatus','connectorOutputPower', 'menu'];
  dataSource!: MatTableDataSource<any>;

  constructor(private activeRoute: ActivatedRoute,private connector:ConnectorsService,private route:Router){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
        this.stationId = this.activeRoute.snapshot.paramMap.get('stationId');
        this.chargerId = this.activeRoute.snapshot.paramMap.get('chargerId');
        console.warn(this.stationId);
        console.warn(this.chargerId);
        this.getConnectorUsingIds(this.stationId,this.chargerId)
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

  openConnectorSetting(id: any){
    this.route.navigate(['connector-setting',id])
  }
}
