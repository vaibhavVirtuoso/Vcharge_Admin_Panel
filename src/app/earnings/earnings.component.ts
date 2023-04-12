import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MystationService } from '../service/mystation.service';

@Component({
  selector: 'earnings-control',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent {
  displayedColumns: string[] = ['station', 'location', 'address'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private myStation:MystationService) {}

  ngOnInit():void{
    this.getEmployeeInfo();
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
}
