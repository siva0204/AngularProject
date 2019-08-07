import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { from } from 'rxjs';

import {DatePipe} from '@angular/common';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { SearchComponent } from './search/search.component';
import { PipesearchPipe } from './search/pipesearch.pipe';
import { SearchService } from './search/search.service';

import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddTaskComponent,
    ViewTaskComponent,
    DeleteTaskComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // FilterPipeModule,
    // PipesearchPipe
  ],
  providers:[SearchService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
