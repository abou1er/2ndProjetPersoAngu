import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resaRoom';

  inpConnect: any 
  // inpConnect =  {
  //   username: "",
  //   mdp: "",
  //   }
  conectGood = false

  isAdmin:boolean = false
  conectWrong:boolean = false

  authen : any 
    // auth : any = {
    // username :"Pedro",
    // mdp : "1234"
    // }

    constructor(public auth: AuthService){}

    disconect(){
      this.isAdmin = !this.isAdmin
    }

    onconect(fConnect:any){
      // this.isAdmin = !this.isAdmin
    this.inpConnect = fConnect;
    console.log(this.inpConnect.username , " le username");  
    console.log(this.inpConnect.mdp , " le mdp");   
    
      if(this.inpConnect.username == this.authen.username  &&  this.inpConnect.mdp == this.authen.mdp){        
        this.isAdmin = !this.isAdmin
        this.conectGood  = true
      }else{        
        this.conectWrong = true       
        setTimeout(() => {this.conectWrong = false}, 5000);
        this.onconect(fConnect)
      }      
    }

}

