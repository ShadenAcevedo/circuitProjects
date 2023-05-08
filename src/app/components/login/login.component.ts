import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  hide = true;
  
  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),   
    });
  }

  ngOnInit() {
    
  }

  login() {
    if (!this.formulario.invalid) {
      this.router.navigate(['/dashboard']);
    }
    console.log(this.formulario.value);
  }

}
