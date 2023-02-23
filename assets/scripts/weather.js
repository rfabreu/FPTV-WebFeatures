// // DEVELOPED AND IMPLEMENTED BY RAFAEL ABREU
// CONNECT VIA LINKEDIN AT (https://www.linkedin.com/in/rafael-a-gomes/) OR GITHUB AT (https://github.com/rfabreu)

const weatherFrames = document.querySelectorAll('.weather-frame');

weatherFrames.forEach(frame => {
    frame.addEventListener('load', function () {
        this.style.visibility = 'visible';
    });
});
