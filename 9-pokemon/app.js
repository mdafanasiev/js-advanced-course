"use strict";

const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.send();

request.addEventListener("load", function () {
    const { ability } = JSON.parse(this.responseText).abilities[0];

    const descriptionRequest = new XMLHttpRequest();
    descriptionRequest.open("GET", ability.url);
    descriptionRequest.send();

    descriptionRequest.addEventListener("load", function () {
        const effectObject = JSON.parse(this.responseText).effect_entries[1];
        console.log(effectObject.effect);
    });
});
