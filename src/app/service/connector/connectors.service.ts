import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectorsService {

  constructor(private http:HttpClient) { }

  // get all connectors details
  getConnector(stationId: any,chargerId: any){
    return this.http.get(`http://192.168.0.43:8081/vst1/manageStation/getStationChargersConnector?stationId=${stationId}&chargerId=${chargerId}`)
  }

  // get connector information by connectorId
  getConnectorById(chargerId: any){
    return this.http.get(`http://192.168.0.43:8081/vst1/manageStation/getConnectorId?connectorId=${chargerId}`);
  }

  // adding connectors data
  addConnector(data: any){
    return  this.http.post(``,data);
  }

  // updating connnector data
  updatingConnector(id:any,data:any){
    return this.http.put(`${id}`,data)
  }
}
