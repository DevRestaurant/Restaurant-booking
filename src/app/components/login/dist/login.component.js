"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var angularx_social_login_1 = require("angularx-social-login");
var auth_actions_1 = require("src/app/Actions/auth.actions");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, _flashmessage, _router, socialAuthService, store) {
        this._authService = _authService;
        this._flashmessage = _flashmessage;
        this._router = _router;
        this.socialAuthService = socialAuthService;
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
        }
        else {
            this.store.dispatch(auth_actions_1.AuthLoginAction({ payload: value }));
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
        }
        ;
    };
    LoginComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.socialAuthService.signIn(angularx_social_login_1.GoogleLoginProvider.PROVIDER_ID)
            .then(function () { return _this._router.navigate(['/']); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
