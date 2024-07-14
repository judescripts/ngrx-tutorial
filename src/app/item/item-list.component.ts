import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems, addItem } from './item.actions';
import { Item } from './item.model';
import { selectAllItems } from './item.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectAllItems);
  }

  ngOnInit() {
    console.log('Component initialized');
    this.store.dispatch(loadItems());
    this.items$.subscribe(items => console.log(items));
  }

  addItem(name: string) {
    const newItem: Item = { id: Date.now(), name };
    this.store.dispatch(addItem({ item: newItem }));
  }
}
