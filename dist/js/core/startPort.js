"use strict";
exports.__esModule = true;
exports.StartPort = void 0;
var rockets_1 = require("./rockets");
function getRandomInt(max) {
    if (max === void 0) { max = 3; }
    return Math.floor(Math.random() * Math.floor(max));
}
var StartPort = /** @class */ (function () {
    function StartPort() {
    }
    StartPort.prototype.getAllRockets = function () {
        var list = [];
        for (var i = 0; i < 10; i++) {
            if (getRandomInt() == 0) {
                list.push(new rockets_1.SpaceXRocket());
            }
            else if (getRandomInt() == 1) {
                list.push(new rockets_1.NasaRocket());
            }
            else {
                list.push(new rockets_1.MilitaryRocket());
            }
        }
        return list;
    };
    return StartPort;
}());
exports.StartPort = StartPort;
