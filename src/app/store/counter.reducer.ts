// import recuder

import { createReducer, on } from '@ngrx/store';
import { decreament, increament, reset } from './counter.action';

//initail state
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,

  //on increament
  on(increament, (state) => state + 1),
  on(decreament, (state) => state - 1),
  on(reset, (state) => initialState),
);
