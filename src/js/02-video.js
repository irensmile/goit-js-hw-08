import Player from "@vimeo/player";
import throttle from "lodash.throttle"; 

const iframe = document.querySelector('iframe');
const stopwatch = localStorage.getItem("videoplayer-current-time");
const player = new Player(iframe);

if (stopwatch)
    player.setCurrentTime(stopwatch);

const updateCallback = function (e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
}

player.on("timeupdate", throttle(updateCallback, 1000))

