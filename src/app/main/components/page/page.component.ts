import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  counter = 0;
  updatedAt?: number;

  constructor() {
  }

  get cannotDecrease() {
    return this.counter <= 0;
  }

  get cannotIncrease() {
    return this.counter > 10;
  }

  ngOnInit(): void {
  }

  increase() {
    this.updatedAt = Date.now();
    this.counter++;
  }

  decrease() {
    this.updatedAt = Date.now();
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}
