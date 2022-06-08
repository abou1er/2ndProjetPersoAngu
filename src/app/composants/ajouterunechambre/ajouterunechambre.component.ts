import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-ajouterunechambre',
  templateUrl: './ajouterunechambre.component.html',
  styleUrls: ['./ajouterunechambre.component.css']
})
export class AjouterunechambreComponent implements OnInit {

  constructor(private chambreService : ChambreService) { }

  

  ngOnInit(): void {
  }

  addInRooms(chambresAdmin:any){
    console.log("" + chambresAdmin);
    this.chambreService.addRoomAdmin(chambresAdmin.value).subscribe(data=>{


      console.log( data ,"données save");

            
    })
    
  }
}
