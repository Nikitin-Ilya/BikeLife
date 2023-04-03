import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public authService: AuthService){}

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  signIn():void{
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    if(email && password){
      this.authService.login(email, password);
    }
  }
}
