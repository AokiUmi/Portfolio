const video = document.getElementById('demo');

if (video) {
    video.addEventListener('ended', function (e) {
        setTimeout(function () {
            video.play();
        }, 2000);
    }, false);
}