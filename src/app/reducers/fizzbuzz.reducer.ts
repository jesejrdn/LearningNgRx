import { FizzBuzzActions, FizzBuzzActionTypes } from '../actions/fizzbuzz.actions';
import { FizzbuzzState } from '../feature-states/fizzbuzz-state';

export const initialState: FizzbuzzState = {
  counter: 1
};

export const getCounter = (state: FizzbuzzState) => state.counter;

export function reducer(state = initialState, action: FizzBuzzActions): FizzbuzzState {
  switch (action.type) {

    case FizzBuzzActionTypes.Next:
      return {
        counter: state.counter + 1
      };

    default:
      return state;
  }
}
