"use strict";

const timeElement = (timePart) =>
    document.querySelector(`.time[timePart = ${timePart}]`);

const dateParts = {
    month: timeElement("month"),
    day: timeElement("day"),
    hour: timeElement("hour"),
    minute: timeElement("minute"),
    second: timeElement("second"),
};

function msToNewYear() {
    const newYear = new Date(new Date().getFullYear() + 1, 0, 1);
    return newYear.getTime() - Date.now();
}
function LabelForDatePart(dateNumber, dateIndex) {
    const suffixes = new Map([
        ["one", 0],
        ["two", 1],
        ["few", 2],
        ["many", 3],
    ]);

    const labels = [
        ["месяц", "месяца", "месяца", "месяцев"],
        ["день", "дня", "дня", "дней"],
        ["час", "часа", "часа", "часов"],
        ["минута", "минуты", "минуты", "минут"],
        ["секунда", "секунды", "секунды", "секунд"],
    ];

    const plural = new Intl.PluralRules("ru-RU", { type: "cardinal" }).select(
        dateNumber
    );
    const index = suffixes.get(plural);

    return `${dateNumber} ${labels[dateIndex][index]}`;
}

function timeToNewYear() {
    const diffMs = msToNewYear();
    const diffMonths = diffMs / 1000 / 60 / 60 / 24 / 30;
    const diffDays = diffMs / 1000 / 60 / 60 / 24;
    const diffHours = diffMs / 1000 / 60 / 60;
    const diffMinutes = diffMs / 1000 / 60;
    const diffSeconds = diffMs / 1000;

    const month = Math.floor(diffMonths % 12);
    const d = Math.floor(diffDays % 30);
    const h = Math.floor((diffHours % 30) % 24);
    const m = Math.floor(diffMinutes % 60);
    const s = Math.floor(diffSeconds % 60);

    const dateObject = {
        month,
        d,
        h,
        m,
        s,
    };
    setTimeToElements(dateObject);
    if (diffMs == 0) clearInterval(interval);
}

function setTimeToElements(dateObject) {
    dateParts.month.textContent = LabelForDatePart(dateObject.month, 0);
    dateParts.day.textContent = LabelForDatePart(dateObject.d, 1);
    dateParts.hour.textContent = LabelForDatePart(dateObject.h, 2);
    dateParts.minute.textContent = LabelForDatePart(dateObject.m, 3);
    dateParts.second.textContent = LabelForDatePart(dateObject.s, 4);
}

const interval = setInterval(timeToNewYear, 1000);
