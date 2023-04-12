import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MystationService } from 'src/app/service/mystation.service';

@Component({
  selector: 'app-station-control-access',
  templateUrl: './station-control-access.component.html',
  styleUrls: ['./station-control-access.component.css']
})
export class StationControlAccessComponent implements OnInit{
  stationId:any;
  myStationData:any;

  apiAmenities: string[] = [];

  constructor(private formBuilder:FormBuilder,private activeRoute:ActivatedRoute, private myStation:MystationService) {}

  ngOnInit():void{
    this.activeRoute.params.subscribe(params => {
      this.stationId =  params['id'];      
      this.getMyStationUsingId(this.stationId);
    })
  }

  // get station details by stationId 
  getMyStationUsingId(id:any){    
    this.myStation.getStationById(id).subscribe((result)=>{
      this.myStationData = result;
      this.apiAmenities = this.myStationData.stationAmenity;
    })
}
}
