import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Project } from '../../models/project.models';
import { ProjectService } from '../../services/project.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

interface Estado {
  name: string;
}

@Component({
  selector: 'uploadFile',
  templateUrl: './uploadFile.component.html',
  styleUrls: ['./uploadFile.component.css']
})
export class UploadFileComponent implements OnInit {
  
  project: FormGroup;

  estados: Estado[] = [
    {name: 'Iniciado'},
    {name: 'Avanzado'},
    {name: 'Terminado'}
  ];

  constructor(private formBuilder: FormBuilder, 
    public projectService: ProjectService) { 
    this.project = this.formBuilder.group({
      nameProject: new FormControl('', [Validators.required]),
      fileProject: new FormControl('', [Validators.required]),   
      estado: new FormControl('', [Validators.required]), 
    });
  }

  ngOnInit() {
  }

  create() {
    if (this.project.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Debe llenar el formulario',
        icon: 'error'
      });
    } else{
      const project = new Project(
        this.project.value.nameProject, 
        this.project.value.fileProject, 
        this.project.value.estado);
      this.projectService.createProject(project)
        .subscribe(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.project.reset();
        });
    }
  }
}
