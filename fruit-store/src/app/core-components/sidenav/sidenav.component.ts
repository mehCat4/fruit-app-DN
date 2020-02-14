import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruit-store-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Functions delcared here
  closeSidenav() {
    document.getElementById("fruitSidenav").style.width = "0";
    document.getElementById("").style.marginLeft = "0";
  }

}
