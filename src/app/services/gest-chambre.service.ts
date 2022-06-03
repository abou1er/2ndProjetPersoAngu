import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GestChambreService {

  constructor(private http : HttpClient) { }

  getRoomsAdmin(){
    return this.http.get("http://localhost:3000/chambre");
  }

  addRoomAdmin(chambre : any){
    return this.http.post("http://localhost:3000/chambre", chambre);
  }

  delete(id:any){
    return this.http.delete("http://localhost:3000/chambre/"+id)
  }

}
