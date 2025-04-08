"use strict";

const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Character.prototype.talk = function () {
    console.log(
        `Character's name is ${this.name}. Character's language is ${this.language}`
    );
};

const Orc = function (race, name, language, weapon) {
    Character.call(this, race, name, language);
    this.weapon = weapon;
    this.hit = function () {
        console.log(`${this.race} ${this.name} strikes with a ${this.weapon}`);
    };
};

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

const Elf = function (race, name, language, spells) {
    Character.call(this, race, name, language);
    this.spells = spells;
    this.createSpell = function () {
        const spellIndex = Math.floor(Math.random() * this.spells.length);
        console.log(
            `${this.race} ${this.name} created a ${this.spells[spellIndex]}`
        );
    };
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

const orcVasya = new Orc("Orc", "Vasiliy", "russian", "Axe");
orcVasya.hit();

const elfJohn = new Elf("Elf", "John", "english", [
    ("abracadabra", "snow", "rain"),
]);
elfJohn.createSpell();

console.dir(elfJohn);
console.dir(orcVasya);
