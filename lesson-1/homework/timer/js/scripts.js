"use strict";

var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) {
        if (number % 100 > 4 && number % 100 < 20) {
            decCache[number] = 2;
        } else {
            decCache[number] = decCases[Math.min(number % 10, 5)];
        }
    }
    return titles[decCache[number]];
}

function timerLeft(year, month, day) {

    setInterval(function () {
        var hoursLeft = document.getElementById('timer-v-hours'),
            hoursText = document.getElementById('timer-v-hours__text'),
            minutesLeft = document.getElementById('timer-v-minutes'),
            minutesText = document.getElementById('timer-v-minutes__text'),
            secLeft = document.getElementById('timer-v-seconds'),
            secText = document.getElementById('timer-v-seconds__text'),
            daysLeft = document.getElementById('timer-v-days'),
            daysText = document.getElementById('timer-v-days__text'),
            dateNow = new Date().getTime(), // получаем текущую дату, getTime() - переводим в мсек
            dateFinish = new Date(year, month, day), // дата до которой производим обратный отсчет
            sec = Math.floor((dateFinish - dateNow) / 1000), // кол-во секунд от dateNow до dateFinish (мсек/1000 = сек)
            secToMinutes = sec % 3600, // остаток на минуты, т.е. без кол-ва часов (1 час 3600 сек)
            secToHours = sec % 86400,  // остаток на чвсы, т.е. без кол-ва дней (1 день час 86400 сек)
            daysNumber = parseInt(Math.floor(sec / 86400)),
            hoursNumber = parseInt(Math.floor(secToHours / 3600)), // получим ко-во часов
            minutesNumber = parseInt(Math.floor(secToMinutes / 60)), // получим ко-во минут
            secondsNumber = parseInt(secToMinutes % 60); // получим ко-во минут

        daysText.innerHTML = decOfNum(daysNumber, ['день', 'дня', 'дней']);
        hoursText.innerHTML = decOfNum(hoursNumber, ['час', 'часа', 'часов']);
        minutesText.innerHTML = decOfNum(minutesNumber, ['минута', 'минуты', 'минут']);
        secText.innerHTML = decOfNum(secondsNumber, ['секунда', 'секунды', 'секунд']);

        daysLeft.innerHTML = daysNumber;
        hoursLeft.innerHTML = hoursNumber;
        minutesLeft.innerHTML = minutesNumber;
        secLeft.innerHTML = secondsNumber;

    }, 1000)
}

timerLeft(2017, 6, 8);

