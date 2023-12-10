
let time = document.getElementById('time');
let btn = document.getElementById('btn');
let text = document.getElementById('alarm-text');
let alarmTone = document.getElementById('alarm-audio');


var alarmString = null;
alarmText = (time) => `Alarm set at time- ${time}`;

const showTime = () => {
    const currentDate = new Date();
    var h = currentDate.getHours();
    var m = currentDate.getMinutes();
    var s = currentDate.getSeconds();
    var z = h >= 12 ? "PM" : "AM";

    if (h > 12) {
        h = h % 12;
    }

    const timeString = getTimeString({ h, m, s, z });
    checkAlarm(timeString);
    time.innerHTML = timeString;
};

const getTimeString = ({ h, m, s, z }) => {
    if (m / 10 < 1) {
        m = "0" + m;
    }

    if (s / 10 < 1) {
        s = "0" + s;
    }

    return `${h}:${m}:${s} ${z}`;
};

const play = () => {
    let tone = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    tone.play();
}

const checkAlarm = (time) => {
    if (alarmString == time) {
        play();
    }
}

const submit = (event) => {
    event.preventDefault();
    const { hour, min, sec, zone } = document.forms[0];
    alarmString = getTimeString({
        h: hour.value,
        m: min.value,
        s: sec.value,
        z: zone.value
    });

    text.innerHTML = alarmText(alarmString);
}

btn.addEventListener("click", submit);


setInterval(showTime, 1000);



