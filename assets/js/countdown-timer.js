/*---------- Event Countdown ----------*/

$(document).ready(function() {

    // Nouvelle date de début du hackathon
    let futureCountdown = new Date("May 14, 2025 12:00:00").getTime();

    function countDown() {

        let now = new Date().getTime();
        let gap = futureCountdown - now;

        let seconds = 1000;
        let minutes = seconds * 60;
        let hours = minutes * 60;
        let day = hours * 24;

        let d = Math.floor(gap / day);
        let h = Math.floor((gap % day) / hours);
        let m = Math.floor((gap % hours) / minutes);
        let s = Math.floor((gap % minutes) / seconds);

        $('#day').text(d);
        $('#hour').text(h);
        $('#minute').text(m);
        $('#second').text(s);

    }

    setInterval(countDown, 1000);
});
