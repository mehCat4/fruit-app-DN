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
  openSidenav() {
    document.getElementById("fruitSidenav").style.width = "250px";
    document.getElementById("").style.marginLeft = "250px";
  }

  closeSidenav() {
    document.getElementById("fruitSidenav").style.width = "0";
    document.getElementById("").style.marginLeft = "0";
  }

}
