let imac = document.getElementById("image");
let audio = document.getElementById("audio");
let play_btn = document.getElementById("play-btn");
let icon = document.getElementById("control-icon");
let circle = document.getElementById("circle-back");
let image_container = document.getElementById("image-container");

let is_playing = false;

function play_effects() {
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
    imac.style.animationPlayState = "running";
    circle.style.animationPlayState = "running";
    image_container.style.boxShadow = "0px 0px 20px #fff";
}

const pause_effects = () => {
  icon.classList.add("fa-play");
  icon.classList.remove("fa-pause");
  imac.style.animationPlayState = "paused";
  circle.style.animationPlayState = "paused";
  image_container.style.boxShadow = "0px 0px 0px #fff";
};

play_btn.addEventListener("click", () => {
        if (is_playing) {
            audio.pause();
            is_playing = false;
            pause_effects();
        } else {
            audio.play();
            is_playing = true;
            play_effects();
        }
    });
  let volumen = audio.volume;

const volumen_effects = () => {
  let volumen_bar = document.getElementById("volumen");
  volumen_bar.style.display = "block";

  let volume_status = document.getElementById("vol");

  volume_status.style.height = volumen * 100 + "%";

  setTimeout(() => {
    volumen_bar.style.display = "none";
  }, 2000);
};

com.addEventListener(" ", (event) => {
  if (event.key == " ") {
    if (is_playing) {
      audio.pause();
      is_playing = false;
      pause_effects();
    } else {
      audio.play();
      is_playing = true;
      play_effects();
    }
  } else if (event.key == "ArrowRight") {
    volumen_effects();
    if (volumen < 1) {
      volumen = volumen + 0.1;
      audio.volume = volumen;
    }
  } else if (event.key == "ArrowLeft") {
    volumen_effects();
    if (volumen > 0.1) {
      volumen = volumen - 0.1;
      audio.volume = volumen;
    }
  }
});