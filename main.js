Webcam.attach('#liveview');

camera = document.getElementById("liveview")

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});