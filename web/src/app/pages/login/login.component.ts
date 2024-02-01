import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  ;
  public isLoading: boolean;
  public successLogin: boolean;
  public loginForm: FormGroup
  
  constructor(private router: Router, private fb: FormBuilder)
  { 
    this.loginForm = this.fb.group({
      login: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password:['', Validators.required]
    })

    this.isLoading = false;
    this.successLogin = true;
  }

  onSubmit(){
    if(this.loginForm.valid)
      this.router.navigate([''])
  }
}
