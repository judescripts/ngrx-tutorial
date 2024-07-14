import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { itemReducer } from './item/item.reducer';
import { ItemEffects } from './item/item.effects';
import { InMemoryDataService } from './item/in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)),
    provideStore({ items: itemReducer }),
    provideEffects([ItemEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
    }),
  ],
};
