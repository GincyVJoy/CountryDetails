import { Action, createReducer, on } from '@ngrx/store';

export const initialState = ["asia","europe"];

const _regionReducer = createReducer(initialState);

export function regionReducer(state: string[] | undefined, action: Action) {
  return _regionReducer(state, action);
}

