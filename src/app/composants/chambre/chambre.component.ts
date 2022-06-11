import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  chambres: any;
  chambreInfoRecup: any;
  prixChambre: any ;

  userInfoRecup : any = {
  nom: "",
  prenom: "",
  age: "",
  nombreDepers: "",
  dateArrive: "",
  nbJour:"",
  prixChambre: "",
  totalSej: Number
  }
  
  totalPrice: any

  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
    this.getRooms()
  }

  getRooms() {
    this.chambreService.getRooms().subscribe(data => {
      this.chambres = data;
      console.log(this.chambres);

    })
  }

  recupInfoRoom(c: any) {
    this.chambreInfoRecup = c;
    console.log(this.chambreInfoRecup.prix , " prixinforecup");   
  }

  
  addUser(u:any){
    this.userInfoRecup = u
    console.log(this.userInfoRecup);
    // Calcul du prix de la chambre
    //On recupere le prix de le chambre et on le multiple par le nombre de jour reservés
    this.totalPrice = (this.chambreInfoRecup.prix * this.userInfoRecup.nbJour)
    // this.totalPrice = parseInt(this.chambreInfoRecup.prix ) * parseInt(this.userInfoRecup.nbJour)
    this.userInfoRecup.totalSej = this.totalPrice
    
    console.log("this.totalPrice= "+ this.totalPrice);
    
    this.chambreService.addUserProfile(u).subscribe(data=>{
      console.log("données save",)
    })

  }

}
