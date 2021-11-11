import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  showAllMeal: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showMeals(){
    this.showAllMeal = true;
  }

  showPrices(){
    this.showAllMeal = false;
  }

}
