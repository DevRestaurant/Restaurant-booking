import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { IData } from 'src/app/Models/IData';
import { ILogin } from 'src/app/Models/ILogin';
import { AuthService } from 'src/app/services/auth.service';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Store } from '@ngrx/store';
import { AuthLoginAction } from 'src/app/Actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  login!: ILogin;

  constructor(
    private _authService: AuthService,
    private _flashmessage: FlashMessagesService,
    private _router: Router,
    private socialAuthService: SocialAuthService,
    private store: Store<{auth: ILogin}>) { }

  ngOnInit(): void {
    
  }

  onSubmit({ value, valid }: { value: ILogin, valid: boolean | null }) {

    if (!valid) {
    }
    else {
      this.store.dispatch(AuthLoginAction({payload: value}))
      // this._authService.LoginUser(value)
      //   .subscribe({
      //     next: (data: IData) => {
      //       const user = data;
      //       this._flashmessage.show(user.message,
      //         {
      //           cssClass: 'alert-success', timeout: 2000
      //         });
      //       this._authService.logged = 'true';
      //       localStorage.setItem("logged", JSON.stringify(this._authService.logged));
      //       this._router.navigate(['/booking']);
            
      //     },
      //     error: () => {
      //       this._flashmessage.show("Invalid Credentials",
      //         {
      //           cssClass: 'alert-danger', timeout: 3000
      //         });
      //     }
      //   })
    };
    
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this._router.navigate(['/']));
  }

}
