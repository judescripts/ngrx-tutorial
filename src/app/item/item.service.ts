import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'https://api.example.com/items';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return of([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ]);
  }

  addItem(item: Item): Observable<Item> {
    return of(item);
  }
}
