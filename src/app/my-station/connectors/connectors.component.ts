import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css']
})
export class ConnectorsComponent implements OnInit{
  chargerId: any;

  constructor(private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      this.chargerId = params['id'];
      console.warn(this.chargerId);
      
    })
  }

}
