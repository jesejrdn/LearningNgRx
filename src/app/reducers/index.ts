import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromFizzbuzz from './fizzbuzz.reducer';
import { FizzbuzzState } from '../feature-states/fizzbuzz-state';

export interface AppState {
  fizzbuzz: FizzbuzzState;
}

export const reducers: ActionReducerMap<AppState> = {
  fizzbuzz: fromFizzbuzz.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

// Select the fizzbuzz state from app state
const getFizzBuzzState = createFeatureSelector<FizzbuzzState>('fizzbuzz');

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
