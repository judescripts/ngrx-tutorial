import { createAction, props } from '@ngrx/store';
import { Item } from './item.model';

export const loadItems = createAction('[Item List] Load Items');
export const loadItemsSuccess = createAction(
  '[Item List] Load Items Success',
  props<{ items: Item[] }>()
);
export const addItem = createAction(
  '[Item List] Add Item',
  props<{ item: Item }>()
);
export const addItemSuccess = createAction(
  '[Item List] Add Item Success',
  props<{ item: Item }>()
);
