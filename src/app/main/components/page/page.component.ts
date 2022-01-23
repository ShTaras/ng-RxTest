import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {countSelector, decrease, increase, reset} from "../../../reducers/counter";
import {map} from "rxjs";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  updatedAt?: number;
  counter$ = this.store.select(countSelector);
  cannotDecrease$ = this.counter$.pipe(map(count => count <= 0))

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  increase() {
    this.updatedAt = Date.now();
    this.store.dispatch(increase())
  }

  decrease() {
    this.updatedAt = Date.now();
    this.store.dispatch(decrease())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
