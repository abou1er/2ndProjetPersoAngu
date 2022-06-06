import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GestChambreService {

  constructor(private http : HttpClient) { }

  getRoomsAdmin(){
    return this.http.get("http://localhost:3000/chambre");
    // return this.http.get("http://localhost:3000/chambre/");    test si nomdufichier.format sa le fait?
  }

  addRoomAdmin(chambre : any){
    return this.http.post("http://localhost:3000/chambre", chambre);
  }

  delete(id:any){
    return this.http.delete("http://localhost:3000/chambre/"+id)
  }

  roomUpd(r:any){
    return this.http.put("http://localhost:3000/chambre/"+r.id, r)
  }

  getWithkeyword(inpSearching:any){
    return this.http.get("http://localhost:3000/chambre?q="+inpSearching)
  }

  getbyprice(min:any, max:any){
    return this.http.get(`http://localhost:3000/chambre?prix_gte=${min}&prix_lte=${max}`)  
    // return this.http.get("http://localhost:3000/produits?price_gte="+min +"&price_lte="+max)
  }

  getbyCatego(catego:any){
    return this.http.get(`http://localhost:3000/chambre?lit=${catego}`)
  
  }
  //http://localhost:3000/produits?categorie=fruit
  

}
