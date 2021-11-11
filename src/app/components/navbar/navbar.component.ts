import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { IData } from 'src/app/Models/IData';
import { ILogin } from 'src/app/Models/ILogin';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() loginUser: EventEmitter<ILogin> = new EventEmitter();
  logged: boolean = false;

  first!: string;
  last!: string;
  email!: string;
  address!: string;
  password!: string;
  confirmPassword!: string;

  login!: ILogin;

  constructor(private menuService: MenuServiceService,
    private _flashmessage: FlashMessagesService) { }

  ngOnInit() {

  }

  changelog() {
    this.logged = !this.logged;
  }

  onSubmit({ value, valid }: { value: ILogin, valid: boolean | null }) {
    console.log(value);
    
    if (!valid) {
      this._flashmessage.show("Please fill this out correctly",
        {
          cssClass: 'alert-danger', timeout: 4000
        });
    }
    else {
      this.menuService.LoginUser(value)
        .subscribe({
          next: (data: IData) => {
            const user = data;
            console.log(user);
            if (user.statusCode === 200) {
              this._flashmessage.show(user.message,
                {
                  cssClass: 'alert-success', timeout: 3000
                });
              this.logged = true;
            }
            else{
              this._flashmessage.show(user.message,
                {
                  cssClass: 'alert-danger', timeout: 3000
                });
            }
            
          },
          error: (err: IData) => {
            this._flashmessage.show(err.message,
              {
                cssClass: 'alert-danger', timeout: 3000
              });
          }
        }
          // (login: ILogin) => {
          //   const user = login;
          //   this._flashmessage.show(user.message,
          //     {
          //       cssClass: 'alert-success', timeout: 3000
          //     });
          //   this.logged = true;
          // },
          // error => {
          //   console.log(error)
          //   this._flashmessage.show(error,
          //     {
          //       cssClass: 'alert-danger', timeout: 3000
          //     });
          // }
        )
    };
  }
}
