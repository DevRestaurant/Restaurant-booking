"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(menuService, _flashmessage) {
        this.menuService = menuService;
        this._flashmessage = _flashmessage;
        this.loginUser = new core_1.EventEmitter();
        this.logged = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.changelog = function () {
        this.logged = !this.logged;
    };
    NavbarComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(value);
        if (!valid) {
            this._flashmessage.show("Please fill this out correctly", {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            this.menuService.LoginUser(value)
                .subscribe({
                next: function (data) {
                    var user = data;
                    console.log(user);
                    if (user.statusCode === 200) {
                        _this._flashmessage.show(user.message, {
                            cssClass: 'alert-success', timeout: 3000
                        });
                        _this.logged = true;
                    }
                    else {
                        _this._flashmessage.show(user.message, {
                            cssClass: 'alert-danger', timeout: 3000
                        });
                    }
                },
                error: function (err) {
                    _this._flashmessage.show(err.message, {
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
            );
        }
        ;
    };
    __decorate([
        core_1.Output()
    ], NavbarComponent.prototype, "loginUser");
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
