import { Component, OnInit } from '@angular/core';
import { GestChambreService } from 'src/app/services/gest-chambre.service';

@Component({
  selector: 'app-gest-chambre',
  templateUrl: './gest-chambre.component.html',
  styleUrls: ['./gest-chambre.component.css']
})
export class GestChambreComponent implements OnInit {
  // var roomsAdmin()--------------
  chambresAdmin : any;

  // var update()-----------------
  chambreAmodif:any ={
      id: "",
      lit: "",
      prix: "",
      ville: "",
      classement: "",
      nomDeChambre: "",
      urlPics: "",
      description: ""
  }

  //var searchInpt()--------------
  valInptSearch : any      //va servir à stocker la valeur qui sera rentré dans l'input search
  searchIsVide : boolean = false  // va servir à jouer avec le ngif si aucune valeur correspondante image.pngne ressort


  constructor(private gestChambreService : GestChambreService) { }

  ngOnInit(): void {
    this.roomsAdmin();
  }

  roomsAdmin(){
    this.gestChambreService.getRoomsAdmin().subscribe(data=>{
      this.chambresAdmin = data;
      console.log(this.chambresAdmin);
    })
  }

  delete(id : any){
    this.gestChambreService.delete(id).subscribe(()=>{
      console.log("product avec l'id "+ id + "est delete");
      
      this.roomsAdmin();
    })
  }

  recupInfoRoom(r:any){
    this.chambreAmodif = r;
    console.log(this.chambreAmodif); 
  }

  roomUpdate(){
    this.gestChambreService.roomUpd(this.chambreAmodif).subscribe(()=>{

    })
  }

  searchInpt(inpSearching:any){
    this.valInptSearch = inpSearching.nameInptSearchBar;
    console.log("valeur de this.valInptSearch " + this.valInptSearch);
    
  }

}
