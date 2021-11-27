import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeal } from '../Models/IMeal';


@Injectable({
  providedIn: 'root'
})
export class MenuServiceService{

  baseUrl: string = 'http://localhost:31836/api';
  

  constructor(private _httpClient: HttpClient) { }

  getMenu(id: string) : Observable<IMeal[]> {
    if (id === null) {
      const url = `${this.baseUrl}/get-meal`;
      return this._httpClient.get<IMeal[]>(url);
    } 
    else{
      const url = `${this.baseUrl}/${id}`;
      return this._httpClient.get<IMeal[]>(url);
    }
  }

}

