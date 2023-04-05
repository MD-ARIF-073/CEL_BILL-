import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { DatabaseAPIservicesServiceService } from '../../services/database-apiservices-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{

  projectList:Project[]=[];
  display:boolean=true;

  constructor(private projectService:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
    this.getProject();
  }

  getProject()
  {
    this.projectService.getAllProject().subscribe(
      data =>{
        this.projectList=data;
      }
    );
  }

  modalClose()
  {
    this.display!=this.display;
    this.getProject();
  }

  deleteProject(id:number)
  {
    this.projectService.deleteProject(id).subscribe(data =>{
      this.getProject();
      var deleteprojectNotification=document.getElementById('project-delete-alart');
      if(deleteprojectNotification)
      {
        deleteprojectNotification.style.display="block";
      }
      setTimeout(function(){
        if(deleteprojectNotification)
        {
          deleteprojectNotification.style.display="none"
        }
      },4000)
    })
  }

}
