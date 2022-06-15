import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin:boolean = false

  auth : any = [
    {
      username :"Pedro",
      mdp : "1234"
      },
      {
        username :"alpha dealo",
        mdp : "1234"
        }
  ]



  constructor() { }


}
