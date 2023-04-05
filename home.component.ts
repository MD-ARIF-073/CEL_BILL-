import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { DatabaseAPIservicesServiceService } from '../services/database-apiservices-service.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  projectList:Project[]=[];
  display:boolean=true;

  constructor(private projectService:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList()
  {
    this.projectService.getAllProject().subscribe(
      data =>{
        this.projectList=data;
      }
    );
  }
}
