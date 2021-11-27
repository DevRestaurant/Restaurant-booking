import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { IData } from 'src/app/Models/IData';
import { ILogin } from 'src/app/Models/ILogin';
import { AuthService } from 'src/app/services/auth.service';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() loginUser: EventEmitter<ILogin> = new EventEmitter();
  @Output() logged: boolean = false;

  first!: string;
  last!: string;
  email!: string;
  address!: string;
  password!: string;
  confirmPassword!: string;

  login!: ILogin;

  constructor(private _authService: AuthService,
    private _flashmessage: FlashMessagesService) { }

  ngOnInit(): void {
  }

  changelog() {
    this.logged = !this.logged;
  }

  onSubmit({ value, valid }: { value: ILogin, valid: boolean | null }) {

    if (!valid) {
      this._flashmessage.show("Please fill this out correctly",
        {
          cssClass: 'alert-danger', timeout: 4000
        });
    }
    else {
      this._authService.LoginUser(value)
        .subscribe({
          next: (data: IData) => {
            const user = data;
            this._flashmessage.show(user.message,
              {
                cssClass: 'alert-success', timeout: 3000
              });
            this.logged = true;
          },
          error: (err) => {
            console.log(err.error);
            
            this._flashmessage.show("Invalid Credentials",
              {
                cssClass: 'alert-danger', timeout: 3000
              });
          }
        }
        )
    };
  }

}
