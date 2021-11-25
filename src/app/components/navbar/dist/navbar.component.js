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
var router_1 = require("@angular/router");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(menuService, _router) {
        var _this = this;
        this.menuService = menuService;
        this._router = _router;
        this.loginUser = new core_1.EventEmitter();
        this._router.events.subscribe(function (ev) {
            if (ev instanceof router_1.NavigationEnd) {
                _this.logged = _this.menuService.logged;
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logOut = function () {
        this.menuService.logged = 'false';
        localStorage.removeItem("logged");
        this._router.navigate(['/']);
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
