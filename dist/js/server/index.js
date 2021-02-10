"use strict";
exports.__esModule = true;
var rocketManager_1 = require("../core/rocketManager");
var express = require("express");
var app = express();
var RocketInfo = /** @class */ (function () {
    function RocketInfo() {
    }
    return RocketInfo;
}());
app.get("/list", function (req, res) {
    var rocketNames = "Rockets: ";
    for (var i in rocketManager_1.rockets) {
        rocketNames += rocketManager_1.rockets[i].name;
        rocketNames += ", ";
    }
    res.send(rocketNames);
});
app.get("/:rocketName", function (req, res) {
    var rocket;
    var info = new RocketInfo();
    for (var i in rocketManager_1.rockets) {
        if (rocketManager_1.rockets[i].name == req.params.rocketName) {
            info.name = req.params.rocketName;
            info.date = new Date().toISOString();
        }
    }
    res.send(info);
});
app.post("/add", function (req, res) {
    try {
        var rocket = JSON.parse(req.body);
        res.status(200);
    }
    catch (Ex) {
        res.status(409);
    }
    res.send();
});
app.listen(4000, function () {
    console.log("SERVER IS ON");
});
