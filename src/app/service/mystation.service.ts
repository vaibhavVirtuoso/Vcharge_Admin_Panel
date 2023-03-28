import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
