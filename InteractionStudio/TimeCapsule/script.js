document.querySelectorAll(".setting").forEach(function(image) {
    image.addEventListener("click", function() {
        var audio = document.getElementById("audio1");
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});