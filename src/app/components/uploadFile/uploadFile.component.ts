import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'uploadFile',
  templateUrl: './uploadFile.component.html',
  styleUrls: ['./uploadFile.component.css']
})
export class UploadFileComponent implements OnInit {
  
  formulario: FormGroup;
  hide = true;
  
  constructor(private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),   
    });
  }

  ngOnInit() {
  }

  login() {
    if (!this.formulario.invalid) {
      
    }
    console.log(this.formulario.value);
  }
}
