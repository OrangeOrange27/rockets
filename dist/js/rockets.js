"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.RocketBase = exports.MilitaryRocket = exports.NasaRocket = exports.SpaceXRocket = exports.RocketInfo = void 0;
var RocketBase = /** @class */ (function () {
    function RocketBase() {
    }
    RocketBase.prototype.launch = function () {
        console.log("The " + this.name + " launched at " + new Date());
    };
    return RocketBase;
}());
exports.RocketBase = RocketBase;
var SpaceXRocket = /** @class */ (function (_super) {
    __extends(SpaceXRocket, _super);
    function SpaceXRocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "SpaceX";
        return _this;
    }
    return SpaceXRocket;
}(RocketBase));
exports.SpaceXRocket = SpaceXRocket;
var NasaRocket = /** @class */ (function (_super) {
    __extends(NasaRocket, _super);
    function NasaRocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "NASA";
        return _this;
    }
    return NasaRocket;
}(RocketBase));
exports.NasaRocket = NasaRocket;
var MilitaryRocket = /** @class */ (function (_super) {
    __extends(MilitaryRocket, _super);
    function MilitaryRocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "TOP SECRET";
        return _this;
    }
    MilitaryRocket.prototype.launch = function () {
        console.log(this.name);
    };
    return MilitaryRocket;
}(RocketBase));
exports.MilitaryRocket = MilitaryRocket;
var RocketInfo = /** @class */ (function () {
    function RocketInfo() {
    }
    return RocketInfo;
}());
exports.RocketInfo = RocketInfo;
