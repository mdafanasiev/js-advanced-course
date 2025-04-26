"use strict";

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    talk() {
        console.log(
            `Character's name is ${this.name}. Character's language is ${this.language}`
        );
    }
}

class Orc extends Character {
    #weapon;
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.#weapon = weapon;
    }
    talk() {
        if (this.#weapon === "sword") {
            console.log(`I am an orc ${this.name} with a silver sword.`);
        } else {
            console.log(`I am an orc ${this.name} without my sword.`);
        }
    }

    hit() {
        console.log(`Orc ${this.name} strikes with a ${this.#weapon}`);
    }
}

class Elf extends Character {
    #spells;
    constructor(race, name, language, spells) {
        super(race, name, language);
        this.#spells = spells;
    }

    talk() {
        if (this.#spells.length > 2) {
            console.log(`I am an elf ${this.name} with a lot of spells.`);
        } else {
            console.log(`I am an elf ${this.name}. I have no many spells.`);
        }
    }

    createSpell() {
        const spellIndex = Math.floor(Math.random() * this.#spells.length);
        console.log(
            `${this.race} ${this.name} created a ${this.#spells[spellIndex]}`
        );
    }
}

const orcVasya = new Orc("Orc", "Vasiliy", "russian", "Axe");
orcVasya.hit();

const elfJohn = new Elf("Elf", "John", "english", [
    "abracadabra",
    "snow",
    "rain",
]);
elfJohn.createSpell();

orcVasya.talk();
elfJohn.talk();
console.dir(elfJohn);
console.dir(orcVasya);
