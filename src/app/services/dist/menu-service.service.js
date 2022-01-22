"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenuServiceService = void 0;
var core_1 = require("@angular/core");
var data_1 = require("@ngrx/data");
var MenuServiceService = /** @class */ (function (_super) {
    __extends(MenuServiceService, _super);
    function MenuServiceService(myPluralizer) {
        var _this = _super.call(this, myPluralizer) || this;
        //private baseUrl: string = 'https://restaurantbookingapi20211224110020.azurewebsites.net/api';
        _this.baseUrl = 'http://localhost:31836/api';
        return _this;
    }
    MenuServiceService.prototype.getResourceUrls = function (entityName, root) {
        var _a;
        var resourceUrl = this.knownHttpResourceUrls[entityName];
        if (entityName == 'Meal') {
            var url = this.baseUrl + "/Meal";
            resourceUrl = {
                entityResourceUrl: url,
                collectionResourceUrl: url
            };
            this.registerHttpResourceUrls((_a = {}, _a[entityName] = resourceUrl, _a));
        }
        return resourceUrl;
    };
    MenuServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MenuServiceService);
    return MenuServiceService;
}(data_1.DefaultHttpUrlGenerator));
exports.MenuServiceService = MenuServiceService;
