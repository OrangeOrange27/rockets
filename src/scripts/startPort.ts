import {SpaceXRocket,NasaRocket,MilitaryRocket, RocketBase} from "./rockets";

function getRandomInt(max=3) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class StartPort{
    
    getAllRockets(){
        
        let list: RocketBase[]=[];    
            
        for(var i=0;i<10;i++){
            if(getRandomInt()==0){
                list.push(new SpaceXRocket());
            } 
            else if(getRandomInt()==1){
                list.push(new NasaRocket());
            }
            else {
                list.push(new MilitaryRocket());
            }
        }
        return list;
    }
}
export {StartPort};