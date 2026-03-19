"use strict";

// Krabbe tooltip
const krabbe = document.getElementById("krabbe");
const krabbeTooltip = document.getElementById("krabbeTooltip");

if (krabbe && krabbeTooltip) {
  krabbe.addEventListener("click", () => {
    krabbeTooltip.classList.toggle("is-visible");
  });
}

// Talebobler til fisk og søhest som følger med dem
const scene1 = document.getElementById("scene1");

function makeFollowTooltip(animalId, tooltipId, offsetY = 100) {
  const animal = document.getElementById(animalId);
  const tooltip = document.getElementById(tooltipId);

  if (!animal) {
    console.log("Mangler animal:", animalId);
    return;
  }

  if (!tooltip) {
    console.log("Mangler tooltip:", tooltipId);
    return;
  }

  if (!scene1) {
    console.log("Mangler scene1");
    return;
  }

  let following = false;
  let animationId = null;

  animal.addEventListener("click", () => {
    following = !following;

    if (following) {
      tooltip.classList.add("is-visible");
      followAnimal();
    } else {
      tooltip.classList.remove("is-visible");
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    }
  });

  function followAnimal() {
    if (!following) return;

    const rect = animal.getBoundingClientRect();
    const scene1Rect = scene1.getBoundingClientRect();

    const isOutsideScene =
      rect.right < scene1Rect.left ||
      rect.left > scene1Rect.right ||
      rect.bottom < scene1Rect.top ||
      rect.top > scene1Rect.bottom;

    if (isOutsideScene) {
      tooltip.classList.remove("is-visible");
      following = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      return;
    }

    const x = rect.left - scene1Rect.left + rect.width / 2;
    const y = rect.top - scene1Rect.top;

    tooltip.style.left = x + "px";
    tooltip.style.top = y - offsetY + "px";
    tooltip.style.transform = "translateX(-50%)";

    animationId = requestAnimationFrame(followAnimal);
  }
}

// Her vælger du hvilke dyr/fisk der skal have talebobler
makeFollowTooltip("sohest", "sohestTooltip", 100);
makeFollowTooltip("guldfisk", "guldfiskTooltip", 100);
makeFollowTooltip("blue-fisk", "blueFiskTooltip", 100);
makeFollowTooltip("stribet-fisk", "stribetFiskTooltip", 100);
makeFollowTooltip("barbie-fisk", "barbieFiskTooltip", 100);
makeFollowTooltip("dory-fisk", "doryFiskTooltip", 100);
makeFollowTooltip("haj", "hajFiskTooltip", 100);
makeFollowTooltip("nemo", "nemoTooltip", 100);

// Sound til havfruen
const gethavfrue = document.getElementById("havfrue-snakker");
const soundhavfruesnakker = new Audio();
soundhavfruesnakker.src = "../sound/hejsa-jeg-hedder-ariel.mp3";

/* Tjek om havfruen (gethavfrue) med ID attributten "havfrue-snakker" findes i DOM'en  */ 
if (gethavfrue) {
  gethavfrue.addEventListener("click", () => {
    soundhavfruesnakker.play();
  });
}

// Sound til barbie fisk
const getbarbie = document.getElementById("barbie-fisk");
const soundbarbie = new Audio();
soundbarbie.src = "../sound/sound-barbie.mp3";

if (getbarbie) {
  getbarbie.addEventListener("click", () => {
    soundbarbie.play();
  });
}


// sound til guld fisk //
/* Hent alle DOM-elementerne */
const getguldfisk = document.getElementById("guldfisk");
/* Opretter lydobjekter */
const soundguldfisk = new Audio();
soundguldfisk.src ="../sound/sound-guldfisk.mp3";

if (getguldfisk) {
    getguldfisk.addEventListener("click", ()=> {
        soundguldfisk.play();
    });
}

// sound til stribetfisk //
/* Hent alle DOM-elementerne */
const getstribetfisk = document.getElementById("stribet-fisk");
/* Opretter lydobjekter */
const soundstribetfisk = new Audio();
soundstribetfisk.src ="../sound/stribet-fisk.mp3";
if (getstribetfisk) {
    getstribetfisk.addEventListener("click", ()=> {
        soundstribetfisk.play();
    });
}

// sound til dory //
/* Hent alle DOM-elementerne */
const getdory = document.getElementById("dory-fisk");
/* Opretter lydobjekter */
const sounddoryfisk = new Audio();
sounddoryfisk.src ="../sound/sound-dory.mp3";

if (getdory) {
    getdory.addEventListener("click", ()=> {
        sounddoryfisk.play();
    });
}

// sound til sohest //
/* Hent alle DOM-elementerne */
const getsohest = document.getElementById("sohest");
/* Opretter lydobjekter */
const soundsohest = new Audio();
soundsohest.src ="../sound/sound-sohest.mp3";

if (getsohest) {
    getsohest.addEventListener("click", ()=> {
        soundsohest.play();
    });
}

// sound til nemo //
/* Hent alle DOM-elementerne */
const getnemo = document.getElementById("nemo");
/* Opretter lydobjekter */
const soundnemo = new Audio();
soundnemo.src ="../sound/sound-nemo.mp3";

if (getnemo) {
    getnemo.addEventListener("click", ()=> {
        soundnemo.play();
    });
}

// sound til haj //
/* Hent alle DOM-elementerne */
const gethaj = document.getElementById("haj");
/* Opretter lydobjekter */
const soundhaj = new Audio();
soundhaj.src ="../sound/sound-haj.mp3";

if (gethaj) {
    gethaj.addEventListener("click", ()=> {
        soundhaj.play();
    });
}

// sound til krabbe //
/* Hent alle DOM-elementerne */
const getkrabbe = document.getElementById("krabbe");
/* Opretter lydobjekter */
const soundkrabbe = new Audio();
soundkrabbe.src ="../sound/sound-krabbe.mp3";

if (getkrabbe) {
    getkrabbe.addEventListener("click", ()=> {
        soundkrabbe.play();
    });
}

// sound til blåfisk //
/* Hent alle DOM-elementerne */
const getblafisk = document.getElementById("blue-fisk");
/* Opretter lydobjekter */
const soundblafisk = new Audio();
soundblafisk.src ="../sound/sound-blafisk.mp3";

if (getblafisk) {
    getblafisk.addEventListener("click", ()=> {
        soundblafisk.play();
    });
}


// Glimmer når man trykker på muslingen //

const musling = document.getElementById("musling");

if (musling) {
  musling.addEventListener("click", () => {
    const rect = musling.getBoundingClientRect();

    const perleX = rect.left + rect.width * 0.5;
    const perleY = rect.top + rect.height * 0.6;

    for (let i = 0; i < 12; i++) {
      const glimmer = document.createElement("div");
      glimmer.classList.add("glimmer");


      const randomX = (Math.random() - 0.5) * 100 + "px";
      const randomY = (Math.random() - 0.5) * 100 + "px";

  // Laver flere små glimmer-partikler
 

      glimmer.style.left = perleX + "px";
      glimmer.style.top = perleY + "px";

      glimmer.style.setProperty("--x", randomX);
      glimmer.style.setProperty("--y", randomY);

      document.body.appendChild(glimmer);

      setTimeout(() => { 
        glimmer.remove();
      }, 800);
    }
});
}

// Boblen + får den til at sprøjte
const bobbel = document.getElementById("bobbel");

if (bobbel) {
  bobbel.addEventListener("click", popbobbel);
  spawnBobbel();
}

function popbobbel() {
  if (!bobbel || bobbel.classList.contains("pop")) return;

  const rect = bobbel.getBoundingClientRect();

  bobbel.classList.add("pop");

  for (let i = 0; i < 15; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 40;

    p.style.left = rect.left + rect.width / 2 + "px";
    p.style.top = rect.top + rect.height / 2 + "px";

    p.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    p.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }

  bobbel.addEventListener(
    "animationend",
    () => {
      bobbel.style.display = "none";

      setTimeout(() => {
        bobbel.classList.remove("pop");
        bobbel.style.display = "block";
        spawnBobbel();
      }, 1000);
    },
    { once: true }
  );
}

function spawnBobbel() {
  if (!bobbel) return;

  const maxX = window.innerWidth - bobbel.offsetWidth;
  const maxY = window.innerHeight - bobbel.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  bobbel.style.left = `${randomX}px`;
  bobbel.style.top = `${randomY}px`;
}

// Indsæt ubåd
const gulUbaad = document.getElementById("gul-ubaad");

if (gulUbaad && typeof lottie !== "undefined") {
  lottie.loadAnimation({
    container: gulUbaad,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "json/gul-ubaad.json"
  });

  let x = -300;

  function flytUbaad() {
    x += 1;
    gulUbaad.style.left = x + "px";

    if (x > window.innerWidth) {
      x = -300;
    }

    requestAnimationFrame(flytUbaad);
  }

  flytUbaad();
}