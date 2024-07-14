import { createReducer, on, Action } from '@ngrx/store';
import { loadItemsSuccess, addItemSuccess } from './item.actions';
import { State, initialState } from './item.model';

const _itemReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items })),
  on(addItemSuccess, (state, { item }) => ({ ...state, items: [...state.items, item] }))
);

export function itemReducer(state: State | undefined, action: Action) {
  return _itemReducer(state, action);
}
