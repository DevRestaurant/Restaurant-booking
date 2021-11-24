import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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
    private _router: Router) { }

  ngOnInit() {
    this.logged = this.menuService.logged;
  }
  logOut(){
    localStorage.removeItem('logged');
    this._router.navigate(['/']);
  }
  
}
