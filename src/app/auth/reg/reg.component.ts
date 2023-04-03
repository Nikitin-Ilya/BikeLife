import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { matchValidator } from "./confirm-password.validator";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  constructor(public authService: AuthService){}

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      Validators.required,
      matchValidator('passwordConfirm', true)
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
      matchValidator('password')
    ]),
  });

  signUp():void{
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    const passwordConfirm = this.signUpForm.get('passwordConfirm')?.value;
    if(email && password && passwordConfirm){
      this.authService.register(email, password);
    }
  }

}
