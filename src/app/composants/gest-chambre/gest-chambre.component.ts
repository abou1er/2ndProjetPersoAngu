import { Component, OnInit } from '@angular/core';
import { GestChambreService } from 'src/app/services/gest-chambre.service';

@Component({
  selector: 'app-gest-chambre',
  templateUrl: './gest-chambre.component.html',
  styleUrls: ['./gest-chambre.component.css']
})
export class GestChambreComponent implements OnInit {

  chambresAdmin : any;
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

  


}
