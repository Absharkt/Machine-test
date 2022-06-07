setInterval(function () {
    time = new Date();
    hr = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();

    hr_rot = 30 * hr;
    min_rot = 6 * min;
    sec_rot = 6 * sec;

    hour.style.transform = `rotate(${hr_rot}deg)`;
    minute.style.transform = `rotate(${min_rot}deg)`;
    second.style.transform = `rotate(${sec_rot}deg)`;
}, 1000);