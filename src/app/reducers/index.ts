import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromFizzbuzz from './fizzbuzz.reducer';

export interface State {
  fizzbuzz: fromFizzbuzz.State;
}

export const reducers: ActionReducerMap<State> = {
  fizzbuzz: fromFizzbuzz.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// Select the fizzbuzz state from app state
export const getFizzBuzzState = createFeatureSelector<fromFizzbuzz.State>('fizzbuzz');

// Wrap the getter inside a selector
export const getCounter = createSelector(
  getFizzBuzzState,
  fromFizzbuzz.getCounter
);

// Create the message selector based on the counter state
export const getMessage = createSelector(
  getCounter,
  counter => {
    let message = '';
    if (counter % 3 === 0) {
      message += 'Fizz';
    }
    if (counter % 5 === 0) {
      message += 'Buzz';
    }

    return message || counter.toString();
  }
);
