import { Component, OnInit, ViewChild } from '@angular/core';
import { MystationService } from '../service/mystation.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddStationComponent } from './add-station/add-station.component';


@Component({
  selector: 'app-my-station',
  templateUrl: './my-station.component.html',
  styleUrls: ['./my-station.component.css']
})
export class MyStationComponent implements OnInit{
  // myStationList:any;
  // toggleValue: boolean = false;

  displayedColumns: string[] = ['id', 'station', 'location', 'type','status', 'usage', 'revenue','charger','total','available','inuse','defective','menu'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit():void{
    this.getStationInfo();
  }
  constructor(private myStation:MystationService, private route:Router,private dialog: MatDialog) {}
  
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
  onToggleChange(status:any,id:any):void{
    if(status == 'active'){
      status = 'Inactive';
    }else{
      status = 'active';
    }
    this.myStation.changeStation(status,id).subscribe((result:any)=>{
      if(result){
        this.getStationInfo();
      }
    });
  }

  onClickedSetting(stationId: any){
    this.route.navigate(['/settings/control-access', stationId]);
  }

  // creating function for directing to charger page
  openChargerList(id: any){
    this.route.navigate(['my-station/charging-station',id]);
  }

  // add station dialog box
  openAddStationDialog(){
    const dialogRef = this.dialog.open(AddStationComponent)
  }
}