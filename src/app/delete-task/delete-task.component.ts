import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  task: Task;
  isNew: boolean;

  constructor(private  ts: TaskService, private actRoute:ActivatedRoute, private router: Router) { }

  

  ngOnInit() {
    this.actRoute.params.subscribe(
      (params) =>{let id = params.taskId;
      if(id){
        this.isNew = true;
        this.ts.getById(id).subscribe(
          (data) => {
            this.task=data;
          }
        );
      }else{
        this.isNew=false;
      }
    }
    );
    console.log(this.isNew);
  }

  delete(){
    if(this.isNew){
    this.ts.remove(this.task).subscribe(
      () =>{});
  }
  this.router.navigateByUrl("/view-task");

}
}




  
 
      
    
      