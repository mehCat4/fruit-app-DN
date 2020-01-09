import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruit-store-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  // Variables declared here

  // Functions declared here
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
