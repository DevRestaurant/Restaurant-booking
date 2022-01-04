"use strict";
exports.__esModule = true;
exports.AuthReducer = exports.initialState = void 0;
var store_1 = require("@ngrx/store");
var auth_actions_1 = require("../Actions/auth.actions");
exports.initialState = {
    email: "",
    password: ""
};
var reducer = store_1.createReducer(exports.initialState, store_1.on(auth_actions_1.AuthLoginAction, function (state, action) {
    state = action.payload;
    return state;
}));
function AuthReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    return reducer(state, action);
}
exports.AuthReducer = AuthReducer;
