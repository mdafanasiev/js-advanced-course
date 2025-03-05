function isValidAge(birthday, minAge) {
    const birthdayDate = new Date(birthday);
    const birthdayYear = birthdayDate.getFullYear();
    const currentAgeMs = Date.now() - birthdayDate.getTime();
    const minAgeDateMs =
        new Date(birthdayDate).setFullYear(birthdayYear + minAge) -
        birthdayDate.getTime();
    return currentAgeMs >= minAgeDateMs;
}

const ageGreaterThan14 = (birthday) => isValidAge(birthday, 14);

console.log(ageGreaterThan14("2011-03-06"));
