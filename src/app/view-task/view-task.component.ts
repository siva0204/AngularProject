import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
taskList: Task[];
size:number;
onSearch:boolean=false;
task:Task;
  constructor(private ts:TaskService, private actRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {
   
    this.ts.getAll().subscribe(
      (data) =>{ 
        this.taskList = data; 
        this.size= this.taskList.length;} 
      );
  }

  search1(taskId:number){
    this.ts.search(taskId).subscribe((data)=>{this.task=data});
    this.onSearch=true;
    }
    view(){
      this.router.navigateByUrl("/");
      // this.view2();
}
// view2(){
//   this.router.navigateByUrl("/view-task");
// }
}



