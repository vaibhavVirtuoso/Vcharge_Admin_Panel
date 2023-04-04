import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MystationService {

  constructor(private http:HttpClient) { }

  getMyStationList(){
    return this.http.get('http://192.168.0.43:8081/vst1/manageStation/stations');
  }

  // not working as patch service of this not created
  changeStation(data: any,id: any){
    return this.http.patch('http://192.168.0.43:8081/vst1/manageStation/stations/?stationId='+id,{"stationStatus": data});
  }

  getStationById(id: any){
    return this.http.get('http://192.168.0.43:8081/vst1/manageStation/stations?stationId='+id);
  }

  //for adding the station in staionlist
  addStationToList(data: any): Observable<any>{
    return this.http.post('http://192.168.0.43:8081/vst1/manageStation/stations',data);   //real station api
  }

}
