import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../Models/ILogin';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://restaurantbookingapi20211224110020.azurewebsites.net/api/Authentication/Login';
  logged: string | null = 'false';


  constructor(private _httpClient: HttpClient) {
    if (localStorage.getItem("logged") === null) {
      this.logged = 'false'
    }
    else{
      this.logged = 'true';
    }
   }

  LoginUser(login: ILogin) : Observable<any> {
   
    return this._httpClient.post<any>(this.baseUrl, login, httpOptions);
  }
}
