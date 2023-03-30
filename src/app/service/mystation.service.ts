import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MystationService {

  constructor(private http:HttpClient) { }

  // temporarily add for practice (json-server-api)
  getMyStationList(){
    return this.http.get('http://localhost:3000/myStation');
  }
  // temporarily add for practice (json-server-api)
  changeStation(data: any,id: any){
    return this.http.patch('http://localhost:3000/myStation/'+id,{"status": data});
  }

  // temporarily add for practice (json-server-api)
  getStationById(id: any){
    return this.http.get('http://localhost:3000/myStation/'+id);
  }

  //for adding the station in staionlist
  addStationToList(data: any): Observable<any>{
    // return this.http.post('http://192.168.0.50:8081/vst1/manageStation/station',data);   //real station api
    return this.http.post('http://localhost:3000/myStation/',data);
  }
}
