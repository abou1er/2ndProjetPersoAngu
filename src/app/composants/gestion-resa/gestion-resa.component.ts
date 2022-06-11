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
    nomChambre:"",
    totalSej: Number
  }
  totalPrice: any

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

    // console.log("AVANT calcul this.recupInfoUserResa.nbJour= "+ this.recupInfoUserResa.nbJour);
    // console.log("AVANT thischambresAdmin.prix= "+ this.chambresAdmin.prix);

    // this.totalPrice = (this.chambresAdmin.prix * this.recupInfoUserResa.nbJour)
    // // this.totalPrice = parseInt(this.chambreInfoRecup.prix ) * parseInt(this.recupInfoUserResa.nbJour)
    // this.recupInfoUserResa.totalSej = this.totalPrice
    // console.log("APRES calcul this.recupInfoUserResa.nbJour= "+ this.recupInfoUserResa.nbJour);
    // console.log("APRES thischambresAdmin.prix= "+ this.chambresAdmin.prix);
    // console.log("this.totalPrice= "+ this.totalPrice);
    let data = userForm.value 
    this.gestionResaService.addUsers(data).subscribe(data=>{
      console.log("les données sont enregistrées.")
      
    console.log("AVANT calcul this.recupInfoUserResa.nbJour= "+ this.recupInfoUserResa.nbJour);
    console.log("AVANT thischambresAdmin.prix= "+ this.chambresAdmin.prix);

    })
    
  }


  changeStatus(r:any){
    this.gestionResaService.confirmation(r.id, r.confirme).subscribe((data)=> {
      this.resa()
    })

  }


  deleteResa(id:any){
    console.log("resa id = " + id + " supprimé");
    this.gestionResaService.deleteResa(id).subscribe(()=>{
      console.log("resa id : " + id + "supprimé");
      
    })
  }

}
