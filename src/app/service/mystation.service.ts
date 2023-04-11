import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MystationService {
  
  constructor(private http:HttpClient) { }
  
  //give complete list of station
  getMyStationList(){
    return this.http.get('http://192.168.0.43:8081/vst1/manageStation/stations');
  }

  // not working as patch service of this is not created
  changeStation(data: any,id: any){
    return this.http.patch(''+id,{"stationStatus": data});
  }

  // give complete list of station using stationId
  getStationById(id: any){
    return this.http.get(`http://192.168.0.43:8081/vst1/manageStation/getStationByStationId?stationId=${id}`);
  }

  //for adding the station in staionlist
  addStationToList(data: any): Observable<any>{
    return this.http.post('http://192.168.0.43:8081/vst1/manageStation/station',data);   //real station api
  }

}
