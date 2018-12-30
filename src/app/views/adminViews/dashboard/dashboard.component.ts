import { Component, OnInit } from '@angular/core';
import { Questions } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  questionsToDisplay: any;
  constructor() { }

  ngOnInit() {
    this.initQuestions();
  }
  initQuestions() {
    this.questionsToDisplay = new Questions().data;
    console.log(this.questionsToDisplay);
  }

  getRandomArr(arrInut, splitValue) {
    const arr = arrInut;
    const shuffled = arr.sort(() => .5 - Math.random());
    const selected = shuffled.slice(0, splitValue);
    return selected;
  }

  regenrate() {
    this.questionsToDisplay = new Questions().data;
  }
}
