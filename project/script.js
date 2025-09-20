let clickCount = 0;
let music = document.getElementById("bgMusic");

function showQuestion() {
  document.getElementById("start").classList.add("hidden");
  document.getElementById("question").classList.remove("hidden");
}

function sayNo(btn) {
  clickCount++;
  const msg = document.getElementById("noMessage");

  if (clickCount < 3) {
    msg.innerText = "Yoksa sevmiyor musun? 😢";
    moveButton(btn);
  } else if (clickCount < 6) {
    msg.innerText = "Hayır'a basamazsın 😈";
    btn.style.transform = `scale(${1 - clickCount*0.1})`;
    moveButton(btn);
  } else {
    msg.innerText = "Kaçamazsın artık! 😍";
    btn.style.display = "none";
  }
}

function moveButton(btn) {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  btn.style.position = "absolute";
  btn.style.left = (btn.offsetLeft + x) + "px";
  btn.style.top = (btn.offsetTop + y) + "px";
}

function sayYes() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("love").classList.remove("hidden");
  heartExplosion();
}

function showLetter() {
  document.getElementById("love").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
}

/* Kalp yağmuru */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 500);

/* Kalp patlaması */
function heartExplosion() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("pop-heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

/* Müzik kontrolü */
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
