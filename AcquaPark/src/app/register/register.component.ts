import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registrati = new FormGroup(
    {
     nome : new FormControl('',[Validators.required]),
     cognome : new FormControl('',[Validators.required]),
     eta : new FormControl('16',[Validators.required]),
     citta : new FormControl('',[Validators.required]),
     email : new FormControl('',[Validators.required, Validators.email]),
     password : new FormControl('',[Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])
    }
  )

  ngDoCheck(){
    console.log(this.registrati);
  }

  formatLabel(){

  }
}
