"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(_httpClient) {
        this._httpClient = _httpClient;
        this.Base_Url = 'https://restaurantbookingapi20211224110020.azurewebsites.net/api/Authentication/Login';
        this.logged = 'false';
        if (localStorage.getItem("logged") === null) {
            this.logged = 'false';
        }
        else {
            this.logged = 'true';
        }
    }
    AuthService.prototype.LoginUser = function (login) {
        return this._httpClient.post(this.Base_Url, login, httpOptions);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
