import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChargersService {

  constructor(private http:HttpClient) { }

  getChargerAllList(stationId: any){    
    return this.http.get(`http://192.168.0.43:8081/vst1/manageStation/getStationChargers?stationId=${stationId}`);
  }
}