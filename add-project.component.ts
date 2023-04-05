import { Component,Input, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { DatabaseAPIservicesServiceService } from '../../services/database-apiservices-service.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  
  @Input() project:any;
  projectID:number=0;
  projectNo:string=this.getProjectNo();
  projectName:string="";
  projectDescription:string="";
  projectCost:number=0;

  constructor(private projectService:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
  }

  getProjectNo() {
    return 'CEL-PR'+Math.round(Math.random()*100)+Math.round(Math.random()*550);
  }
  addProject()
  {
    var projectList={
      projectNo:this.projectNo,
      projectName:this.projectName,
      projectDescription:this.projectDescription,
      projectCost:this.projectCost
    }

    this.projectService.addProject(projectList).subscribe(data =>{
      var closeProjectModal=document.getElementById('add-project-modal-close');
      if(closeProjectModal)
      {
        closeProjectModal.click();
        this.projectNo=this.getProjectNo();
        this.projectName="";
        this.projectDescription="";
        this.projectCost=0.0;
      }

      var projectSuccessfullNotification=document.getElementById('addsuccessalart');
      if(projectSuccessfullNotification)
      {
        projectSuccessfullNotification.style.display="block";
      }
      setTimeout(function(){
        if(projectSuccessfullNotification)
        {
          projectSuccessfullNotification.style.display="none"
        }
      },4000)
    })
  }

}
