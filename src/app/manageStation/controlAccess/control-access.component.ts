import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ManageStationService } from 'src/app/apiService/manage-station.service';
import { Station } from '../station';

@Component({
  selector: 'app-control-access',
  templateUrl: './control-access.component.html',
  styleUrls: ['./control-access.component.css']
})
export class ControlAccessComponent {
  stationId:any;
  myStationData!:Station;

  apiAmenities: string[] = [];

  constructor(private formBuilder:FormBuilder,private activeRoute:ActivatedRoute, private myStation:ManageStationService) {}

  ngOnInit():void{
    this.activeRoute.params.subscribe(params => {
      this.stationId =  params['id'];      
      this.getMyStationUsingId(this.stationId);
    })
  }

  // get station details by stationId 
  getMyStationUsingId(id:string){    
    this.myStation.getStationById(id).subscribe((result)=>{
      this.myStationData = result;
      this.apiAmenities = this.myStationData.stationAmenity;
    })
 }
}
