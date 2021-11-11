import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'restaurantBooking';
  footer!: boolean;

  constructor(private _router: Router) { }

  ngOnInit(): void{
    this._router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.footer = (event.url !== '/booking')
      }
    });
  }
}

