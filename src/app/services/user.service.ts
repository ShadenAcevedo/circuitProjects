import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(public http: HttpClient, public router: Router) {

  }

  guardarStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  login(user: User) {
    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, user)
      .pipe(map((resp: any) => {
        this.guardarStorage(resp.user);
        return true;
      }), catchError((err: any) => {
        this.router.navigate(['/login']);
        Swal.fire({
          title: 'Error en el login',
          text: 'Correo o contraseña inválidos',
          icon: 'error'
        });
        return empty();
      }));
  }
}
