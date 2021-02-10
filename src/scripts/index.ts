import {StartPort} from "./startPort";

let port = new StartPort();
let rockets = port.getAllRockets();

for(var i=0;i<rockets.length;i++){
    console.log("Prepare to the next launch "+(i+1)+": ");
    rockets[i].launch();
}

//PAUSE FOR BAT
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));