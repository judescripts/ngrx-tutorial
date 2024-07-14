import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './item.model';

export const selectItemState = createFeatureSelector<State>('items');

export const selectAllItems = createSelector(
  selectItemState,
  (state: State) => state.items
);
