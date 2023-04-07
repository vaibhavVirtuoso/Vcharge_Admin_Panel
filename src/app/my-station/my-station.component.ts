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

  displayedColumns: string[] = ['id', 'station', 'location', 'type','status','charger','total','available','inuse','defective','menu'];
  dataSource!: MatTableDataSource<any>;
  totalNoOfChargers: number = 0;
  availableChargers: number = 0;
  inuseChargers: number = 0;
  outOffOrderChargers: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;  // for using paginator
  @ViewChild(MatSort) sort!: MatSort;                 // for using sort in columns

  ngOnInit():void{
    this.getStationInfo();                            
  }
  constructor(private myStation:MystationService, private route:Router,private dialog: MatDialog) {}
  
  getStationInfo() {                                      // this function calling getMyStation() which is defined
    this.myStation.getMyStationList().subscribe({        // in myStation service which will get all station and will      
      next: (res:any) => {                              // return to this as res 
        this.dataSource = new MatTableDataSource(res); //sending res data into datasource
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        // count data of charger from database
        this.dataSource.data = res.map((station: { chargers: any[]; }) => ({
          ...station,
          // totalNoOfChargers: station.chargers.length,
          availableChargers: station.chargers.filter((chargers: { active: boolean; }) => chargers.active == true).length,
          inuseChargers: station.chargers.filter((chargers: { active: boolean; }) => chargers.active == false).length,
          outOffOrderChargers: station.chargers.filter((chargers: { active: boolean; }) => chargers.active == false).length
          
        }));
        
      },
      error: (err) => {                              // for consoling error
        console.log(err)
      }
    })
  }

  onToggleChange(status:any,id:any):void{          //this function do changes in status field in database when
    if(status == 'Available'){                        //we change the status in website using toggle button
      status = 'Unavailable';
    }else{
      status = 'Available';
    }
    
    this.myStation.changeStation(status,id).subscribe((result:any)=>{
      if(result){
        this.getStationInfo();                      //for updating the list
      }
    });
  }

  onClickedSetting(stationId: any){                                //redirect to control access page by sending
    this.route.navigate(['/settings/control-access', stationId]);  //the id of that specific station
  }

  // creating function for directing to charger page
  openChargerList(id: any){
    this.route.navigate(['my-station/charging-station',id]);
  }

  // opens add station dialog box
  openAddStationDialog(){
    const dialogRef = this.dialog.open(AddStationComponent)
  }
}