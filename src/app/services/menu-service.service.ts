import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeal } from '../Models/IMeal';
import { IData } from '../Models/IData';


@Injectable({
  providedIn: 'root'
})
export class MenuServiceService{

  baseUrl: string = 'https://restaurantbookingapi20211224110020.azurewebsites.net/api';
  

  constructor(private _httpClient: HttpClient) { }

  getMeals() : Observable<IData> {
      const url = `${this.baseUrl}/meal`;
      return this._httpClient.get<IData>(url);
  }

  getMeal(id: string) : Observable<IMeal> {
    const url = `${this.baseUrl}/${id}`;
      return this._httpClient.get<IMeal>(url);
  }

}

