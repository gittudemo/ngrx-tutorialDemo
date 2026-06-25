import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { decreament, increament, reset } from './store/counter.action';
import { Observable } from 'rxjs';
// import { AppState, selectCounter } from './store/counter.selector';
import { CommonModule } from '@angular/common';
import { counterFeature } from './store/counter.feature';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  counter$: Observable<number>;
  protected readonly title = signal('ngrx-tutorialDemo');

  constructor(private _store: Store) {
    // this.counter$ = this._store.select(selectCounter);
    this.counter$ = this._store.select(counterFeature.selectCounterState);
  }

  increament() {
    this._store.dispatch(increament());
  }
  decreament() {
    this._store.dispatch(decreament());
  }
  reset() {
    this._store.dispatch(reset());
  }
}
