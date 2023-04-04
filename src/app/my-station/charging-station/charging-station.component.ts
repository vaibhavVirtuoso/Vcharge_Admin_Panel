import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ChargersService } from 'src/app/service/charger/chargers.service';
import { MystationService } from 'src/app/service/mystation.service';

@Component({
  selector: 'app-charging-station',
  templateUrl: './charging-station.component.html',
  styleUrls: ['./charging-station.component.css']
})
export class ChargingStationComponent implements OnInit {
  stationId: any;
  stationName: any;
  chargerListData: any;

  constructor(private activeRoute:ActivatedRoute,private charger:ChargersService, private myStation:MystationService,private route:Router ) {}

  displayedColumns: string[] = ['id', 'chargerName', 'chargerserialNumber','connectorStatus','total','activeConnector','inactiveconnector','chargerStatus', 'menu'];
  dataSource!: MatTableDataSource<any>;
  totalConnectors: number = 0;
  activeConnectors: number = 0;
  inactiveConnectors: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.stationId =params['id'];        
      this.getChargerListById(this.stationId);      //to get the charger list of particular station using charger service
      // this.getStationNamebyId(this.stationId);     //to get station name from station service
     })
    // this.getChargerInfo();
  }

  getChargerListById(id: any) {
    this.charger.getChargerAllList(id).subscribe({
      next: (res:any) => {
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

  // redirecting to connector page 
  openConnector(chargerId: any){
    this.route.navigate(['',chargerId]);
  }

  // getStationNamebyId(id: any){
  //   this.myStation.getStationById(id).subscribe((result)=>{
  //     if(result){
  //       console.warn(result);
        
  //       // this.stationName = result.stationName.value;
  //     }
  //   })
  // }
}
