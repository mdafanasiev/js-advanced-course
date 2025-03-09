"use strict";

const MIN_DICE_BOUND = 4;
const MAX_DICE_BOUND = 20;

const dices = createDices();

// Взятие и бросок многогранника

const takeRandomDice = () => dices[randomInt(0, dices.length - 1)];
const throwDice = (dice) => randomInt(1, dice.bound);

// Основная часть

const dice = takeRandomDice();
console.log(`Вам достался ${dice.name}`);
console.log(`Выпало число ${throwDice(dice)}`);

// Создание многогранников

function createDices() {
    const dices = [];
    for (let bound = MIN_DICE_BOUND; bound <= MAX_DICE_BOUND; bound += 2) {
        dices.push(createDice(bound));
    }
    return dices;
}

function createDice(bound) {
    return {
        name: "D" + bound,
        bound,
    };
}

function randomInt(leftBound, rightBound) {
    return Math.floor(Math.random() * (rightBound - leftBound + 1) + leftBound);
}
