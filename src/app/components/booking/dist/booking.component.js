"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookingComponent = void 0;
var core_1 = require("@angular/core");
var BookingComponent = /** @class */ (function () {
    function BookingComponent(router, _authService, store) {
        this.router = router;
        this._authService = _authService;
        this.store = store;
        store.select('auth').subscribe(function (data) {
            console.log(data);
        });
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (localStorage.getItem("logged") === null) {
            this._authService.logged = 'false';
            if (this._authService.logged === 'false') {
                //navigate to login page if not logged In
                this.router.navigate(['/login']);
            }
        }
        else {
            //this._menuService.logged = localStorage.getItem("logged");
        }
    };
    BookingComponent = __decorate([
        core_1.Component({
            selector: 'app-booking',
            templateUrl: './booking.component.html',
            styleUrls: ['./booking.component.css']
        })
    ], BookingComponent);
    return BookingComponent;
}());
exports.BookingComponent = BookingComponent;
