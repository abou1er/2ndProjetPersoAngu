import { Component, OnInit } from '@angular/core';
import { GestionResaService } from 'src/app/services/gestion-resa.service';

@Component({
  selector: 'app-gestion-resa',
  templateUrl: './gestion-resa.component.html',
  styleUrls: ['./gestion-resa.component.css']
})
export class GestionResaComponent implements OnInit {
  reservations: any;

  recupInfoUserResa : any = {
    id : "",
    sex: "",
    prenom:"",
    nombreDepers: "",
      dateArrive: "",
      nbJour: ""

  }

  constructor(private gestionResaService : GestionResaService) { }

  ngOnInit(): void {
    this.resa();
  }

  resa(){
    this.gestionResaService.getResa().subscribe(data=>{
      this.reservations = data;
      console.log(this.reservations);
      
    })
  }

  resaRecupInfoUser(r:any){

    this.recupInfoUserResa = r;
    // console.log("logrResa=" + this.recupInfoUserResa);
    
  }



  delete(id:any){

    console.log("resa id = " + id + " supprimé");
    // this.gestionResaService.deleteResa(id).subscribe(()=>{
    //   console.log("resa id : " + id + "supprimé");
      
    // })
  }

}
