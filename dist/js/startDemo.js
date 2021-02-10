"use strict";
exports.__esModule = true;
var rocketManager_1 = require("./rocketManager");
for (var i = 0; i < rocketManager_1.rockets.length; i++) {
    console.log("Prepare to the next launch " + (i + 1) + ": ");
    rocketManager_1.rockets[i].launch();
}
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
