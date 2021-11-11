import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeal } from '../Models/IMeal';
import { ILogin } from '../Models/ILogin';

const httpOptions = {
  headers: new HttpHeaders({'COntent-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  baseUrl: string = 'http://localhost:31836/api/Authentication/Login';

  constructor(private _httpClient: HttpClient) { }

  LoginUser(login: ILogin) : Observable<any> {
   
      return this._httpClient.post<any>(this.baseUrl, login, httpOptions);
  }

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

