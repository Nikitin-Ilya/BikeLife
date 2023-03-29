import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isLogged: boolean = true;
  private role: string = "owner";
  constructor() { }

  public get isLoggedIn(){
    return this.isLogged;
  }

  public get getRole(){
    return this.role;
  }
}
