import { Action } from '@ngrx/store';
import { FizzBuzzActions, FizzBuzzActionTypes } from '../actions/fizzbuzz.actions';


export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 1,
};

export const getCounter = (state: State) => state.counter;

export function reducer(state = initialState, action: FizzBuzzActions): State {
  switch (action.type) {

    case FizzBuzzActionTypes.Next:
      return {
        counter: state.counter + 1
      };

    default:
      return state;
  }
}
