import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { decreament, increament, reset } from './store/counter.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ngrx-tutorialDemo');

  constructor(private _store: Store) {}

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
