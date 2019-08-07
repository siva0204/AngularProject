import { Injectable } from '@angular/core';
import { Task } from './models/task';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  
  taskList:Task[];
  task:Task;

  

  constructor() { 
    this.taskList =[
      {taskId:1, name:'task1',priority:5, parentTask:'maintask',Designation:'Manager',Status:'open', startDate:new Date('06-07-2019'), endDate:new Date('06-07-2019'),IsComplete:false},
      {taskId:2, name:'task2',priority:3, parentTask:'maintask',Designation:'Manager',Status:'closed', startDate:new Date('06-07-2019'), endDate:new Date('06-07-2019'),IsComplete:true},
      {taskId:3, name:'task3',priority:2, parentTask:'main1task',Designation:'Manager',Status:'pending', startDate:new Date('06-07-2019'), endDate:new Date('06-07-2019'),IsComplete:false},
      {taskId:4, name:'task4',priority:1, parentTask:'main1task', Designation:'Manager',Status:'closed',startDate:new Date('06-07-2019'), endDate:new Date('06-07-2019'),IsComplete:true},
      {taskId:5, name:'task5',priority:5, parentTask:'maintask', Designation:'Manager',Status:'open',startDate:new Date('06-07-2019'), endDate:new Date('06-07-2019'),IsComplete:false}
    ];
  }
  getAll():Observable<Task[]>{
    return new Observable((observer)=>{
      observer.next(this.taskList);
      observer.complete();
  });
}

add(task : Task):Observable<any>{
  return new Observable((observer) => {
    this.taskList.push(task);
    observer.complete();
  }
  )
}

updateTask(task : Task):Observable<Task>{
  return new Observable(


    (observer)=>{
      let id = task.taskId;
      this.taskList.splice(this.taskList.indexOf(task),1);
      this.taskList.push(task);
      observer.complete();
    }
  )
}



remove(task : Task):Observable<any>{
  return new Observable((observer) => {
    var index = this.taskList.indexOf(task);
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
      observer.complete();
    }    
  )
}

search(taskId:number):Observable<Task>{
  // console.log(num);
  return new Observable((Observer)=>{
  Observer.next(this.taskList.find(data => data.taskId==taskId));
  Observer.complete();
  })
  }

  search1(taskId:number):Observable<Task>{
    // console.log(num);
    return new Observable((Observer)=>{
    Observer.next(this.taskList.find(data => data.taskId==taskId));
    Observer.complete();
    })
    }


getById(taskId : number): Observable<Task>{
  return new Observable((observer) => {
      
      //console.log(this.contact)
      observer.next(this.taskList.find( i => i.taskId ==taskId));
            observer.complete();
    }
  )
}
}








