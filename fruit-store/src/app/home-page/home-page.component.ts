import { Component, OnInit } from '@angular/core';
import { Fruit } from "../fruit";
import { FruitService } from "../fruit.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  fruits: Fruit[] = [];

  constructor(
    private fruitService: FruitService
  ) { }

  ngOnInit(): void {
    this.getFruits();
  }

  // Functions declared here
  getFruits(): void {
    this.fruitService.getFruits()
      .subscribe(fruits => this.fruits = fruits)
  }
}
