import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ILogin } from 'src/app/Models/ILogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() loginUser: EventEmitter<ILogin> = new EventEmitter();
  
  logged!: string | null;

  constructor(
    private _router: Router,
    private _authService: AuthService) { 
      
      this._router.events.subscribe(ev => {
        if (ev instanceof NavigationEnd) {
          this.logged = this._authService.logged;
        }
      })
    }

  ngOnInit() {
  }

  logOut(){
    this._authService.logged = 'false';
    localStorage.removeItem("logged");
    if (this._router.url === '/') {
      this._router.navigate(['/booking']);
    }
    else{
      this._router.navigate(['/']);
    }
  }
}
