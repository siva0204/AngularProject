import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name : string;

  constructor() {
    this.name ="© Copyright 2019. All rights reserved.";
   }

  ngOnInit() {
  }

}
