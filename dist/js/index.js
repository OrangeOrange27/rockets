"use strict";
exports.__esModule = true;
var startPort_1 = require("./startPort");
var port = new startPort_1.StartPort();
var rockets = port.getAllRockets();
for (var i = 0; i < rockets.length; i++) {
    console.log("Prepare to the next launch " + (i + 1) + ": ");
    rockets[i].launch();
}
//PAUSE FOR BAT
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
