import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ng2Data = {
    name: 'Angular',
    version: 'X'
  };

  constructor() {
  }

  ngOnInit() {
  }

  ng2Fire(data: any) {
    debugger;
    console.log(data);
  }

}
