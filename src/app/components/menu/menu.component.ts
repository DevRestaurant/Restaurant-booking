import { Component, OnInit, Output } from '@angular/core';
import { IData } from 'src/app/Models/IData';
import { IMeal } from 'src/app/Models/IMeal';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  showAllMeal: boolean = true;

  constructor(private _mealService: MenuServiceService) { }
  meals!: IMeal[];

  ngOnInit() {
    this._mealService.getMeals().subscribe((data: IData) => {
      this.meals = data.data;
    })
  }

  showMeals(){
    this.showAllMeal = true;
  }

  showPrices(){
    this.showAllMeal = false;
  }

}
