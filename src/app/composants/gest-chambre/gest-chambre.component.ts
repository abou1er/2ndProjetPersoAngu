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
  totalChambre: any;

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
  totalSearchInp : boolean = false
  
    //tableau pour tri catégorie
    categories= [{lit:"simple"}, {lit:"double"},{lit:"triple"}]
    categoOries= ["simple","double","triple"];
    //fin pour tri catégorie

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

            // trie par categorie
            onCategory(c:any){
              this.gestChambreService.getbyCatego(c).subscribe(resultDeSearchByCatego=>{
                this.chambresAdmin = resultDeSearchByCatego;
            }) //this.chambresAdmin va être égal à se que la méthode va retourner 
              console.log("type c est : ", c);
              
            }

  searchInpt(inpSearching:any){
    this.valInptSearch = inpSearching.nameInptSearchBar;
    console.log("valeur de this.valInptSearch " + this.valInptSearch);    
    this.gestChambreService.getWithkeyword(inpSearching.nameInptSearchBar).subscribe(resultDeSearchInp=>{
      //explication un peu abstraite  reboucle en affichant seulement this.produits avec valeur de l'inputSearch. Dans this.produits recheche moi nom recupDeSearch choisi ici par moi

      
      this.chambresAdmin = resultDeSearchInp;
      this.totalChambre = this.chambresAdmin.length
      console.log("this.totalChambre = " + this.totalChambre)
      // totalSearchInp test
//////////////////////////////////////////////////////////////////////////////////
      if(this.chambresAdmin.length<=0){  // si la longueur ne retourne aucune longueur aucun élément correspond à la valeur entrée dans linput
        this.searchIsVide = true
        setTimeout(() =>{this.searchIsVide = false}
        , 5000); //la methode vérifie si une chambre correspond auqui devient true (donc s'affiche) + setTimeout qui refait passer la valeur à false 
        this.roomsAdmin();
      }

    })    
  }


  searchByPrice(tataForm:any){
    // utilisé dans le formulaire Va récupéré l'ensemble des données du formulaire sous forme dobjet et en précisant lename je récup seulement la valeur de linput du même name    
        console.log(tataForm.nameMin );
        console.log(tataForm);        
        this.gestChambreService.getbyprice(tataForm.nameMin, tataForm.nameMax).subscribe(resultDeSearchByPrice=>{
    
        this.chambresAdmin = resultDeSearchByPrice;      
        })
        }
    
          // trie par categorie
        // onCategory(c:any){
        //   this.gestChambreService.getbyCatego(c).subscribe(resultDeSearchByCatego=>{
        //     this.chambresAdmin = resultDeSearchByCatego;
        // }) //this.chambresAdmin va être égal à se que la méthode va retourner 
        //   console.log("type c est : ", c);
          
        // }

}
