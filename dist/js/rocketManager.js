"use strict";
exports.__esModule = true;
exports.rockets = void 0;
var startPort_1 = require("./startPort");
var port = new startPort_1.StartPort();
var rockets = port.getAllRockets();
exports.rockets = rockets;
