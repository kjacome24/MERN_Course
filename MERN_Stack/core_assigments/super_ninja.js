// --------------Parent class----------------

class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`This is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

// --------------class extension----------------

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 210;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;   

    }
    speakWisdom() {
        super.drinkSake();
        console.log("Be or not to be!.");
    }
    drinkSake() {
        super.drinkSake();
        super.drinkSake();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
superSensei.drinkSake();
superSensei.showStats();