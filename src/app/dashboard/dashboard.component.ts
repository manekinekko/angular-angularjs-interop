import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ng2Data = {
    name: 'Angular',
    date: new Date(),
    random: 0
  };

  ng1Data = {};

  constructor() {
  }

  ngOnInit() {
  }

  sendRandomNg1Data() {
    this.ng2Data = {
      name: 'Angular',
      date: new Date(),
      random: Math.random()
    };
  }

  ng2Fire(data: any) {
    this.ng1Data = data;
  }

}
