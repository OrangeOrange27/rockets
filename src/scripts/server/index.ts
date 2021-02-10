import {RocketBase} from "../core/rockets"
import {rockets} from "../core/rocketManager"


const express = require("express");
const app = express();


class RocketInfo{
    name:string;
    date:string;
}

app.get("/list", (req,res)=>{

    let rocketNames = "Rockets: ";
    for(var i in rockets){
        rocketNames+=rockets[i].name;
        rocketNames+=", ";
    }
    res.send(rocketNames);
})

app.get("/:rocketName", (req,res)=>{

    let rocket: RocketBase;
    let info: RocketInfo = new RocketInfo();

    for(var i in rockets){
        if(rockets[i].name == req.params.rocketName){

            info.name=req.params.rocketName;
            info.date = new Date().toISOString();
        }
    }
    
    res.send(info);
})

app.post("/add", (req,res)=>{

    try{
    let rocket:RocketBase = JSON.parse(req.body);
    res.status(200);
    } catch(Ex){
    res.status(409);
    }

    res.send();
})

app.listen(4000, ()=>{
    console.log("SERVER IS ON")
})