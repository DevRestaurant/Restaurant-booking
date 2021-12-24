"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenuServiceService = void 0;
var core_1 = require("@angular/core");
var MenuServiceService = /** @class */ (function () {
    function MenuServiceService(_httpClient) {
        this._httpClient = _httpClient;
        this.baseUrl = 'http://localhost:31836/api';
    }
    MenuServiceService.prototype.getMeals = function () {
        var url = this.baseUrl + "/meal";
        return this._httpClient.get(url);
    };
    MenuServiceService.prototype.getMeal = function (id) {
        var url = this.baseUrl + "/" + id;
        return this._httpClient.get(url);
    };
    MenuServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MenuServiceService);
    return MenuServiceService;
}());
exports.MenuServiceService = MenuServiceService;
