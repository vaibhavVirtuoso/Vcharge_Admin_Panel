import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MystationService } from 'src/app/service/mystation.service';

@Component({
  selector: 'app-charging-station',
  templateUrl: './charging-station.component.html',
  styleUrls: ['./charging-station.component.css']
})
export class ChargingStationComponent implements OnInit {
  stationId: any;
  chargerListData: any;

  constructor(private activeRoute:ActivatedRoute,private myStation:MystationService) {}

  displayedColumns: string[] = ['id', 'station', 'location', 'address', 'type','status','menu'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.stationId =params['id'];      
      this.getChargerListUsingId(this.stationId);
    })

    this.getStationInfo();
  }

  getStationInfo() {
    this.myStation.getMyStationList().subscribe({
      next: (res:any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getChargerListUsingId(id: any){
    this.myStation.getStationById(id).subscribe((result)=>{
      this.chargerListData = result;
    })
  }
}
