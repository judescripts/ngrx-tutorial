import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemListComponent],
  template: `<app-item-list></app-item-list>`,
})
export class AppComponent {}
