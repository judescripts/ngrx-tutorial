import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items: Item[] = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    return { items };
  }
}
