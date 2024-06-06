import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
visualizza : boolean = true;

login= new FormGroup({
  email : new FormControl('',[Validators.required, Validators.email]),
  password : new FormControl('',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$")])
})

toggleView(){
  console.log(this.visualizza);
  
  return this.visualizza=!this.visualizza;
}
}
