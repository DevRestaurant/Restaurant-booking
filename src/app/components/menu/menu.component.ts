import { Component, OnInit, Output } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IData } from 'src/app/Models/IData';
import { IMeal } from 'src/app/Models/IMeal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  showAllMeal: boolean = true;
  mealService!: EntityCollectionService<IMeal>;

  constructor(
    entityCollectionServiceFactory: EntityCollectionServiceFactory) { 
      this.mealService = entityCollectionServiceFactory.create<IMeal>("Meal");
      this.meals$ = this.mealService.entities$;
    }
  meals$!: Observable<IMeal[]>;

  ngOnInit() {
    this.mealService.getAll();
  }

  showMeals(){
    this.showAllMeal = true;
  }

  showPrices(){
    this.showAllMeal = false;
  }

}
