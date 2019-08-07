import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task:Task;
  isNew : boolean;

 
  constructor(private ts: TaskService, private actRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.actRoute.params.subscribe(
      (params) => { let id = params.taskId;
      if(id){
        this.isNew = false;
        this.ts.getById(id).subscribe(
          (data) => {this.task=data;
          }
        );
      }else{
        this.isNew = true;
        this.task =  new Task();
      }
    }
    );
  }



add(){

  if(this.isNew){
    if(this.task.Status==="open" ||this.task.Status==="pending" ){
      this.task.IsComplete=false;
     
    }
    else{
      this.task.IsComplete=true;
    }console.log(this.task.IsComplete);

  this.ts.add(this.task).subscribe(
    () =>{}
    );
  
  
}
else{
  if(this.task.Status==="open"||this.task.Status==="pending" ){
    this.task.IsComplete=false;
   
  }
  else{
    this.task.IsComplete=true;
  }console.log(this.task.IsComplete);
  this.ts.updateTask(this.task).subscribe(()=>{});
}

this.router.navigateByUrl("/view-task");
}



reset(){

this.task.taskId =null;
this.task.name =null;
this.task.parentTask =null;
this.task.Designation =null;
this.task.Status =null;
this.task.priority =null;
this.task.startDate =null;
this.task.endDate =null;
}
}








