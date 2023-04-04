import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connector-setting',
  templateUrl: './connector-setting.component.html',
  styleUrls: ['./connector-setting.component.css']
})
export class ConnectorSettingComponent implements OnInit{
  connectorId: any;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.connectorId = this.activeRoute.snapshot.paramMap.get('connectorId')
  }

}
