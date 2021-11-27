import { Component, Input, OnInit } from '@angular/core';
import { ILogin } from 'src/app/Models/ILogin';
import { Router } from '@angular/router';
import { MenuServiceService } from 'src/app/services/menu-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(
    private router: Router,
    private _menuService: MenuServiceService,
    private _authService: AuthService) { }

  ngOnInit(): void {
    
  }

  onSubmit({value, valid}: {value: ILogin, valid: boolean | null}){

    if (localStorage.getItem("logged") === null) {
      this._authService.logged = 'false'
    }else {
      //this._menuService.logged = localStorage.getItem("logged");
    }
    if(this._authService.logged === 'false'){

      //navigate to login page if not logged In
      this.router.navigate(['/login']);
    }
  }

}
