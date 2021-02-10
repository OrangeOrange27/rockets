import {StartPort} from "./startPort";

let port = new StartPort();
let rockets = port.getAllRockets();
rockets.sort((a, b) => b.name.localeCompare(a.name));

export {rockets}