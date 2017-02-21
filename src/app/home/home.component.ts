import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ng2Data = {
    name: 'Angular',
    version: 'X'
  };

  constructor() {
  }

  ngOnInit() {
  }

  ng2Fire(data: any) {
    console.log(data);
  }

}
