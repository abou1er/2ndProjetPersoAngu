import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  chambres : any;

  constructor(private chambreService : ChambreService) { }

  ngOnInit(): void {
    this.getRooms()
  }

  getRooms(){
    this.chambreService.getRooms().subscribe(data=>{
      this.chambres = data;
      console.log(this.chambres);
      
    })
  }

}
