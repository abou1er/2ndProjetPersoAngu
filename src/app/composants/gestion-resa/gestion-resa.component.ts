import { Component, OnInit } from '@angular/core';
import { GestionResaService } from 'src/app/services/gestion-resa.service';

@Component({
  selector: 'app-gestion-resa',
  templateUrl: './gestion-resa.component.html',
  styleUrls: ['./gestion-resa.component.css']
})
export class GestionResaComponent implements OnInit {
  reservations: any;

  chambresAdmin: any 
  // = {
  //   classement : "",
  //   description: "",
  //   id:"",
  //   lit:"",
  //   nomDeChambre: "",
  //   prix: "",
  //   urlPics: "",
  //   villes:""

  // }


  recupInfoUserResa : any = {
    id : "",
    sex: "",
    nom:"",
    prenom:"",
    nombreDepers: "",
    dateArrive: "",
    nbJour: "",
    nomChambre:""

  }

  constructor(private gestionResaService : GestionResaService) { }

  ngOnInit(): void {
    this.resa();
    this.roomsAdmin()
    console.log(this.chambresAdmin);
  }

  resa(){
    this.gestionResaService.getResa().subscribe(data=>{
      this.reservations = data;
      console.log(this.reservations);
      
    })
  }

  roomsAdmin(){
    this.gestionResaService.getRoomsAdmin().subscribe(data=>{
      this.chambresAdmin = data;
      console.log(this.chambresAdmin);
    })
  }

  addInfUser(userForm:any){
    console.log(userForm.value);
    
  }


  resaRecupInfoUser(r:any){
    this.recupInfoUserResa = r;
    console.log("log R=" + r);
    
  }



  delete(id:any){

    console.log("resa id = " + id + " supprimé");
    // this.gestionResaService.deleteResa(id).subscribe(()=>{
    //   console.log("resa id : " + id + "supprimé");
      
    // })
  }

}
