import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {countSelector, decrease, increase, reset, updateAtSelector} from "../../../reducers/counter";
import {map} from "rxjs";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  counter$ = this.store.select(countSelector);
  cannotDecrease$ = this.counter$.pipe(map(count => count <= 0))
  updatedAt$ = this.store.select(updateAtSelector);
  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  increase() {
    this.store.dispatch(increase())
  }

  decrease() {
    this.store.dispatch(decrease())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
