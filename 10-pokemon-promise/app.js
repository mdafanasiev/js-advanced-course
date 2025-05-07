"use strict";

function getData(url, errorMsg, method = "GET") {
    return fetch(url, { method }).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
        return response.json();
    });
}

function getAbility(abilityIndex) {
    return getData("https://pokeapi.co/api/v2/pokemon/ditto", "incorrent url")
        .then(({ abilities }) => abilities[abilityIndex].ability)
        .then(({ url }) => getData(url, "incorrect ability url"))
        .then((ability) => ability)
        .catch((err) => console.log(err));
}

function printAbilityDescription(abilityIndex, language = "en") {
    getAbility(abilityIndex)
        .then(({ effect_entries }) => {
            const effectEntry = effect_entries.find(
                (effectEntry) => effectEntry.language.name === "en"
            );
            console.log(effectEntry.effect);
        })
        .catch((err) => console.log(err));
}

printAbilityDescription(0);
