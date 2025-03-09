"use strict";

const objArray = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];

// Будем гарантированно находить первый объект с нужным, если имеются несколько таких объектов
console.log(
    new Set(objArray.map((obj) => objArray.find((el) => el.id === obj.id)))
);
