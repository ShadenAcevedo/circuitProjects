import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.models';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  hide = true;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public userService: UserService) {
    this.formulario = this.formBuilder.group({
      emailUser: new FormControl('', [Validators.required, Validators.email]),
      passUser: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    });
  }

  ngOnInit() {

  }

  login() {
    if (!this.formulario.invalid) {
      const user = new User(this.formulario.value.emailUser, this.formulario.value.passUser);
      this.userService.login(user)
        .subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
    }
  }

}
