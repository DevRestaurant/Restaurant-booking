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
exports.__esModule = true;
exports.AdditionalEntityCollectionReducerMethods = exports.AdditionalPersistenceResultHandler = void 0;
var data_1 = require("@ngrx/data");
var AdditionalPersistenceResultHandler = /** @class */ (function (_super) {
    __extends(AdditionalPersistenceResultHandler, _super);
    function AdditionalPersistenceResultHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdditionalPersistenceResultHandler.prototype.handleSuccess = function (originalAction) {
        var _this = this;
        var actionHandler = _super.prototype.handleSuccess.call(this, originalAction);
        return function (data) {
            var action = actionHandler.call(_this, data);
            if (action && data && data.data) {
                action.payload.data = data.data;
            }
            return action;
        };
    };
    return AdditionalPersistenceResultHandler;
}(data_1.DefaultPersistenceResultHandler));
exports.AdditionalPersistenceResultHandler = AdditionalPersistenceResultHandler;
var AdditionalEntityCollectionReducerMethods = /** @class */ (function (_super) {
    __extends(AdditionalEntityCollectionReducerMethods, _super);
    function AdditionalEntityCollectionReducerMethods(entityName, definition) {
        var _this = _super.call(this, entityName, definition) || this;
        _this.entityName = entityName;
        _this.definition = definition;
        return _this;
    }
    AdditionalEntityCollectionReducerMethods.prototype.queryManySuccess = function (collection, action) {
        var entityCollectionInstance = _super.prototype.queryManySuccess.call(this, collection, action);
        if (action.payload.data) {
            // save the foo property from action.payload to entityCollection instance
            entityCollectionInstance.data = action.payload.data;
        }
        return entityCollectionInstance;
    };
    return AdditionalEntityCollectionReducerMethods;
}(data_1.EntityCollectionReducerMethods));
exports.AdditionalEntityCollectionReducerMethods = AdditionalEntityCollectionReducerMethods;
