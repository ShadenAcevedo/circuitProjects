import { Injectable } from '@angular/core';
import { Project } from '../models/project.models';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project: Project;

  constructor(public http: HttpClient, public router: Router) {

  }

  createProject(project: Project) {
    const url = URL_SERVICIOS + '/project/create';
    return this.http.post(url, project)
      .pipe(map((resp: any) => {
        return true;
      }), catchError((err: any) => {
        this.router.navigate(['/uploadFile']);
        Swal.fire({
          title: 'Error',
          text: 'Error al registrar el proyecto',
          icon: 'error'
        });
        return empty();
      }));
  }

  getProjects(idUser:number) {
    const url = URL_SERVICIOS + '/projects/'+ idUser;
    return this.http.get(url)
      .pipe(map((resp:any) => {
        return resp;
      }), catchError((err: any) => {
        this.router.navigate(['/projects']);
        Swal.fire({
          title: 'info',
          text: err.error.mensaje,
          icon: 'info'
        });
        return empty();
      }));
  }
}
