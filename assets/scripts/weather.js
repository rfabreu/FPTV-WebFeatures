const weatherFrames = document.querySelectorAll('.weather-frame');

weatherFrames.forEach(frame => {
    frame.addEventListener('load', function () {
        this.style.visibility = 'visible';
    });
});
