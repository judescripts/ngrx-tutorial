import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadItems, loadItemsSuccess, addItem, addItemSuccess } from './item.actions';
import { map, mergeMap } from 'rxjs/operators';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Injectable()
export class ItemEffects {
  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() => this.itemService.getAll().pipe(
        map((items: Item[]) => loadItemsSuccess({ items }))
      ))
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      mergeMap((action) => this.itemService.addItem(action.item).pipe(
        map((item: Item) => addItemSuccess({ item }))
      ))
    )
  );
}
