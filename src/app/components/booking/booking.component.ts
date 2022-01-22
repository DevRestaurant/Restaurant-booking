import { Component, Input, OnInit } from '@angular/core';
import { ILogin } from 'src/app/Models/ILogin';
import { Router } from '@angular/router';
import { MenuServiceService } from 'src/app/services/menu-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(
    private router: Router,
    private _authService: AuthService,
    private store: Store<{auth: IUser}>) {
      store.select('auth').subscribe(data => {
        console.log(data);
      })
     }

  ngOnInit(): void {
    
  }

  onSubmit({value, valid}: {value: ILogin, valid: boolean | null}){

    if (localStorage.getItem("logged") === null) {
      this._authService.logged = 'false';

      if(this._authService.logged === 'false'){

        //navigate to login page if not logged In
        this.router.navigate(['/login']);
      }
    }else {
      //this._menuService.logged = localStorage.getItem("logged");
    }
  }
}
