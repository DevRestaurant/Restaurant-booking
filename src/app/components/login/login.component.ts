import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { IData } from 'src/app/Models/IData';
import { ILogin } from 'src/app/Models/ILogin';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  login!: ILogin;

  constructor(private menuService: MenuServiceService,
    private _flashmessage: FlashMessagesService,
    private _router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit({ value, valid }: { value: ILogin, valid: boolean | null }) {

    if (!valid) {
      
    }
    else {
      this.menuService.LoginUser(value)
        .subscribe({
          next: (data: IData) => {
            const user = data;
            this._flashmessage.show(user.message,
              {
                cssClass: 'alert-success', timeout: 3000
              });
            this.menuService.logged = 'true';
            localStorage.setItem("logged", JSON.stringify(this.menuService.logged));
            this._router.navigate(['/booking']);
            
          },
          error: () => {
            this._flashmessage.show("Invalid Credentials",
              {
                cssClass: 'alert-danger', timeout: 3000
              });
          }
        })
    };
    
  }

}
