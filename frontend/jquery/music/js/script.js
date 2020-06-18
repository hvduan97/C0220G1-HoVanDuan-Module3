$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://aredir.nixcdn.com/NhacCuaTui999/MotCuLua-BichPhuong-6288019.mp3?st=5ftl56FsSecCoTzyl4g5sg&e=1592278071');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });

    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });

    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });

    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });

    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});