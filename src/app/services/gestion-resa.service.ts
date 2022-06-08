import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionResaService {

  constructor(private http: HttpClient) { }

  getResa(){
    return this.http.get("http://localhost:3000/userInfo")
  }


  deleteResa(id:any){
    return this.http.delete("http://localhost:3000/userInfo/"+id)
  }
  }

