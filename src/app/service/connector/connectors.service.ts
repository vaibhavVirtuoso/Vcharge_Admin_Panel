import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectorsService {

  constructor(private http:HttpClient) { }

  getConnector(stationId: any,chargerId: any){
    return this.http.get(`http://192.168.0.43:8081/vst1/manageStation/getStationChargersConnector?stationId=${stationId}&chargerId=${chargerId}`)
  }
}
