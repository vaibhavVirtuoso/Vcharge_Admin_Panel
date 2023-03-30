import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MystationService {

  constructor(private http:HttpClient) { }

  getMyStationList(){
    return this.http.get('http://localhost:3000/myStation');
  }

  changeStation(data: any,id: any){
    return this.http.patch('http://localhost:3000/myStation/'+id,{"status": data});
  }

  getStationById(id: any){
    return this.http.get('http://localhost:3000/myStation/'+id);
  }

  addStationToList(data: any): Observable<any>{
    // return this.http.post('http://192.168.0.50:8081/vst1/manageStation/station',data);
    return this.http.post('http://localhost:3000/myStation/',data);
  }
}
