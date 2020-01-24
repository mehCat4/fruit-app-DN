import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Fruit } from "../fruit";
import { FruitService } from "../fruit.service";


@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.less']
})
export class FruitDetailsComponent implements OnInit {
  // Variables declared here
  @Input() fruit: Fruit;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fruitService: FruitService
  ) { }

  ngOnInit() {
    this.getFruit();
  }

  // Functions declared here
  getFruit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fruitService.getFruit(id).subscribe(fruit => this.fruit = fruit);
  }

  goBack(): void {
    this.location.back();
  }

}
