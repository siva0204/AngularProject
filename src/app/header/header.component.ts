import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string;
  subtitle:string;

  constructor() { 
    this.title="Smart Tâche";
    this.subtitle="A new way to manage your tasks";
  }

  ngOnInit() {
  }

}
