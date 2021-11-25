import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ILogin } from 'src/app/Models/ILogin';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() loginUser: EventEmitter<ILogin> = new EventEmitter();
  
  logged!: string | null;

  constructor(private menuService: MenuServiceService,
    private _router: Router) { 
      this._router.events.subscribe(ev => {
        if (ev instanceof NavigationEnd) {
          this.logged = this.menuService.logged;
        }
      })
    }

  ngOnInit() {
  }

  logOut(){
    this.menuService.logged = 'false';
    localStorage.removeItem("logged");
    this._router.navigate(['/']);
    
  }
  
}
