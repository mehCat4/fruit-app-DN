import { InMemoryDbService } from "angular-in-memory-web-api";
import { Fruit} from "./fruit";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const fruits = [
      { id: 0,
        type: 'Apple',
        name: 'Gala',
        description: 'A good fruit',
        price: 1.38},
      { id: 1,
        type: 'Pear',
        name: 'Bosc',
        description: 'A gritty fruit',
        price: 2.45},
      { id: 2,
        type: 'Orange',
        name: 'Cara Cara',
        description: 'An orange fruit',
        price: 1.21}
    ];

    return {fruits};
  }
}
