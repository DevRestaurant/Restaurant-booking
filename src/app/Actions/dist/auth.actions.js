"use strict";
exports.__esModule = true;
exports.AuthLoginAction = void 0;
var store_1 = require("@ngrx/store");
var AuthActionTypes_1 = require("../Enum/AuthActionTypes");
exports.AuthLoginAction = store_1.createAction(AuthActionTypes_1.AuthActionTypes.Login, store_1.props());
