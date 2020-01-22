import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { FRUITS } from "../mock-fruits";


@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.less']
})
export class FruitDetailsComponent implements OnInit {
  fruits = FRUITS;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

  // Functions declared here
  goBack(): void {
    this.location.back();
  }

}
