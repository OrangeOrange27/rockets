abstract class RocketBase{
    abstract name : string;

    launch() : void{
        console.log("The "+this.name+" launched at "+new Date());
    }
}

class SpaceXRocket extends RocketBase{
    name = "SpaceX";
}

class NasaRocket extends RocketBase{
    name = "NASA";
}

class MilitaryRocket extends RocketBase{
    name = "TOP SECRET";

     launch(){
        console.log(this.name);
    }
}

export {SpaceXRocket,NasaRocket,MilitaryRocket, RocketBase};
