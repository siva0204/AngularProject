import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
 

  task:Task;
  isNew: boolean;
onSearch:boolean=false;
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
      this.task = new Task();
    }
  }
  );
  console.log(this.isNew);
}



// search(){
//   if(this.isNew){
//   this.ts.getById(this.task.taskId).subscribe(
//     (data) =>{this.task=data});
// }
// }


search(taskId:number){
  this.ts.search(taskId).subscribe((data)=>{this.task=data});
  this.onSearch=true;
  }
}






    
  
    