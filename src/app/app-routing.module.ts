 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path : '' ,component : HomeComponent, pathMatch : 'full'},
  {path : 'add-task' ,component : AddTaskComponent},
  {path : 'view-task' ,component: ViewTaskComponent },
  {path : "update/:taskId", component:AddTaskComponent},
  {path : "delete/:taskId", component:DeleteTaskComponent},
  {path:"search/:taskId",component:SearchComponent},
  {path:"search",component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





