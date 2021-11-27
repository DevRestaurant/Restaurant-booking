"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_authService, _flashmessage) {
        this._authService = _authService;
        this._flashmessage = _flashmessage;
        this.loginUser = new core_1.EventEmitter();
        this.logged = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.changelog = function () {
        this.logged = !this.logged;
    };
    RegisterComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this._flashmessage.show("Please fill this out correctly", {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            this._authService.LoginUser(value)
                .subscribe({
                next: function (data) {
                    var user = data;
                    _this._flashmessage.show(user.message, {
                        cssClass: 'alert-success', timeout: 3000
                    });
                    _this.logged = true;
                },
                error: function (err) {
                    console.log(err.error);
                    _this._flashmessage.show("Invalid Credentials", {
                        cssClass: 'alert-danger', timeout: 3000
                    });
                }
            });
        }
        ;
    };
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "loginUser");
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "logged");
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
