// ------------------------------------------collectable cards game

class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name,cost,action,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.action = action;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(this.action == "increase"){
                this.stat == "res" ? target.res += this.magnitude : target.power += this.magnitude;
            }else{
                this.stat == "res" ? target.res -= this.magnitude : target.power -= this.magnitude;
            }
            
        }else{
            throw new Error("Target must be a unit!");
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);
const hardAlgorithm = new Effect("Hard Algorithm",2,"increase","increase target's resilience by 3","res",3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"decrease","reduce target's resilience by 2","res",2);
const pairProgramming = new Effect("Pair Programming",3,"increase","increase target's power by 2","power",2);


// player 1:
console.log("Player 1: ----------")
console.log(redBeltNinja);
hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);
// player 2:
console.log("Player 2: ----------")
console.log(blackBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
console.log(redBeltNinja);
// player 1:
console.log("Player 1: ----------")
pairProgramming.play(redBeltNinja);
console.log(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);