import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Fruit } from "../fruit";
import { FruitService } from "../fruit.service";

@Component({
  selector: 'app-fruit-search',
  templateUrl: './fruit-search.component.html',
  styleUrls: ['./fruit-search.component.less']
})
export class FruitSearchComponent implements OnInit {
  // Variables declared here
  fruits$: Observable<Fruit[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private fruitService: FruitService
  ) { }

  // Functions here
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.fruits$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.fruitService.searchFruits(term)),
    );
  }

}
