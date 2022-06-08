
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http : HttpClient) { }

  getRooms(){
    return this.http.get("http://localhost:3000/chambre")
  }

  addRoomAdmin(chambre : any){
    return this.http.post("http://localhost:3000/chambre", chambre);
  }

  addUserProfile(userInfo : any){
    return this.http.post("http://localhost:3000/userInfo", userInfo);
  }


  roomUpd(r:any){
    return this.http.put("http://localhost:3000/chambre/"+r.id, r)
  }
}
