import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {

  pages =[ 1,2,3,4,5,6,7,8,9, ];
  // pages = new Array(12);
  // un array qui recupere une valeur et qui le transforme 

  // exemlpe si la valeur est 30, 

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
    // this.getRooms();
    this.pagination(this.pages)
  }

  // getRooms() {
  //   this.chambreService.getRooms().subscribe(data => {
  //     this.chambres = data;
  //     console.log(this.chambres);

  //   })
  // }

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


  pagination(pI:any){
      
        let numbLimit = 3;

        // if (this.chambres.length > this.pages.length){
        //   this.pages.length = ++this.pages.length
        // }
        // console.log("this.pages.length"+ this.pages.length);
        // console.log("pI avant num de page"+ pI);

        this.chambreService.paginate(pI, numbLimit).subscribe(resultDeretourPaginate=>{
    
        this.chambres = resultDeretourPaginate; 
        // console.log("------------------------------");
        // console.log("chambres.length"+ this.chambres.length);
        // console.log("this.pages.length"+ this.pages.length);
        // console.log("/////////////////////////////////////////");

        })
        }

}
