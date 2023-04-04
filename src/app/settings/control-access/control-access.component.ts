import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MystationService } from 'src/app/service/mystation.service';

@Component({
  selector: 'app-control-access',
  templateUrl: './control-access.component.html',
  styleUrls: ['./control-access.component.css']
})
export class ControlAccessComponent implements OnInit{
  stationId:any;
  myStationData:any;

  toppings = this.formBuilder.group({
    restaurant: false,
    park: false,
    hotel: false,
    shoppingMall:false,
    cinema:false,
    grocery:false
  });

  constructor(private formBuilder:FormBuilder,private activeRoute:ActivatedRoute, private myStation:MystationService) {}

  ngOnInit():void{
    this.activeRoute.params.subscribe(params => {
      this.stationId =  params['id'];      
      this.getMyStationUsingId(this.stationId);
    })

  }

  getMyStationUsingId(id:any){    
    this.myStation.getStationById(id).subscribe((result)=>{
      this.myStationData = result;
      console.warn(this.myStationData);
    })
  }
}
