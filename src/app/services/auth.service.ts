import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from '@ngrx/data';
import { Observable } from 'rxjs';
import { IData } from '../Models/IData';
import { ILogin } from '../Models/ILogin';
import { IUser } from '../Models/IUser';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:31836/api';
  logged: string | null = 'false';


  constructor(
    private _httpClient: HttpClient) {
    // if (localStorage.getItem("logged") === null) {
    //   this.logged = 'false'
    // }
    // else{
    //   this.logged = 'true';
    // }
   }

  LoginUser(login: ILogin) : Observable<IData> {
   
    return this._httpClient.post<IData>(`${this.baseUrl}/Authentication/Login`, login, httpOptions);
    
  }
}
