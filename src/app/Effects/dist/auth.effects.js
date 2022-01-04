"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var AuthActionTypes_1 = require("../Enum/AuthActionTypes");
var operators_1 = require("rxjs/operators");
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions, _authService) {
        var _this = this;
        this.actions = actions;
        this._authService = _authService;
        this.effectName$ = effects_1.createEffect(function () { return _this.actions.pipe(effects_1.ofType(AuthActionTypes_1.AuthActionTypes.Login), operators_1.mergeMap(function (action) { return action; })); }, { dispatch: false });
    }
    AuthEffects = __decorate([
        core_1.Injectable()
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
