import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charger-setting',
  templateUrl: './charger-setting.component.html',
  styleUrls: ['./charger-setting.component.css']
})
export class ChargerSettingComponent implements OnInit{
  chargerId: any;

    constructor(private activeRoute: ActivatedRoute) {}

    ngOnInit(): void {
      this.chargerId = this.activeRoute.snapshot.paramMap.get('chargerId') 
    }

}
