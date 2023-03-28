import { Component, OnInit, ViewChild } from '@angular/core';
import { MystationService } from '../service/mystation.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-station',
  templateUrl: './my-station.component.html',
  styleUrls: ['./my-station.component.css']
})
export class MyStationComponent implements OnInit{
  // myStationList:any;
  // toggleValue: boolean = false;

  displayedColumns: string[] = ['id', 'station', 'location', 'address', 'type','status', 'usage', 'revenue','menu'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit():void{
    this.getEmployeeInfo();
  }
  constructor(private myStation:MystationService, private route:Router){
    // this.myStation.getMyStationList().subscribe((result)=>{
    //   this.myStationList = result;      
    // })
  }
  
  getEmployeeInfo() {
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
  onToggleChange(status:any,id:any):void{
    if(status == 'active'){
      status = 'Inactive';
    }else{
      status = 'active';
    }
    this.myStation.changeStation(status,id).subscribe((result:any)=>{
      if(result){
        this.getEmployeeInfo();
      }
    });
  }

  onClickedSetting(stationId: any){
    this.route.navigate(['/settings/control-access', stationId]);
  }
}