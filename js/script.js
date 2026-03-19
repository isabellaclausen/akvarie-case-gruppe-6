"use strict";

const krabbe = document.getElementById("krabbe");
const krabbeTooltip = document.getElementById("krabbeTooltip");

krabbe.addEventListener("click", () => {
  krabbeTooltip.classList.toggle("is-visible");
});

// taleboble til søhest som følger med den //



// prøve
// talebobler til fisk og søhest som følger med dem
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

  animal.addEventListener("click", () => {
    following = !following;
    tooltip.classList.toggle("is-visible");

    if (following) {
      followAnimal();
    }
  });

  function followAnimal() {
    if (!following) return;

    const rect = animal.getBoundingClientRect();
    const scene1Rect = scene1.getBoundingClientRect();

    const x = rect.left - scene1Rect.left + rect.width / 2;
    const y = rect.top - scene1Rect.top;

    tooltip.style.left = x + "px";
    tooltip.style.top = (y - offsetY) + "px";
    tooltip.style.transform = "translateX(-50%)";

    requestAnimationFrame(followAnimal);
  }
}



// her vælger du hvilke dyr/fisk der skal have talebobler//
makeFollowTooltip("sohest", "sohestTooltip", 100);
makeFollowTooltip("guldfisk", "guldfiskTooltip", 100);
makeFollowTooltip("blue-fisk", "blueFiskTooltip", 100);
makeFollowTooltip("stribet-fisk", "stribetFiskTooltip", 100);
makeFollowTooltip("barbie-fisk", "barbieFiskTooltip", 100);
makeFollowTooltip("dory-fisk", "doryFiskTooltip", 100);
makeFollowTooltip("haj", "hajFiskTooltip", 100);
makeFollowTooltip("nemo", "nemoTooltip", 100);



// sound til havfruen //
/* Hent alle DOM-elementerne */
const gethavfrue = document.getElementById("havfrue-snakker");
/* Opretter lydobjekter */
const soundhavfruesnakker = new Audio();
soundhavfruesnakker.src ="../sound/hejsa-jeg-hedder-ariel.mp3";

/* Tjek om havfruen (gethavfrue) med ID attributten "havfrue-snakker" findes i DOM'en  */ 
if (gethavfrue) {
    gethavfrue.addEventListener("click", ()=> {
        soundhavfruesnakker.play();
    });
}

// sound til barbie fisk //
/* Hent alle DOM-elementerne */
const getbarbie = document.getElementById("barbie-fisk");
/* Opretter lydobjekter */
const soundbarbie = new Audio();
soundbarbie.src ="../sound/sound-barbie.mp3";

/* Tjek om havfruen (gethavfrue) med ID attributten "havfrue-snakker" findes i DOM'en  */ 
if (getbarbie) {
    getbarbie.addEventListener("click", ()=> {
        soundbarbie.play();
    });
}


// Glimmer når man trykker på muslingen //

const musling = document.getElementById("musling");

// Lytter efter klik på muslingen
musling.addEventListener("click", () => {

  // Finder muslingens position på skærmen
  const rect = musling.getBoundingClientRect();

  // Beregner cirka hvor perlen er inde i billedet
  const perleX = rect.left + rect.width * 0.5;
  const perleY = rect.top + rect.height * 0.6;

  // Laver flere små glimmer-partikler
  for (let i = 0; i < 12; i++) {

    // Opretter et nyt element (en "gnist")
    const glimmer = document.createElement("div");
    glimmer.classList.add("glimmer");

    // Giver hver glimmerstykke en tilfældig retning
    const randomX = (Math.random() - 0.5) * 100 + "px";
    const randomY = (Math.random() - 0.5) * 100 + "px";

    // Starter position (fra perlen)
    glimmer.style.left = perleX + "px";
    glimmer.style.top = perleY + "px";

    // Sender retning til CSS animationen
    glimmer.style.setProperty("--x", randomX);
    glimmer.style.setProperty("--y", randomY);

    // Tilføjer glimmer til siden og fjernet det igen når animationen er færdig 
    document.body.appendChild(glimmer);
    setTimeout(() => {
      glimmer.remove();
    }, 800);
  }
});



// Boblen + får den til at sprøjte //
const bobbel = document.getElementById("bobbel");

bobbel.addEventListener("click", popbobbel);

spawnBobbel();

function popbobbel() {
  if (bobbel.classList.contains("pop")) return;

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
  const maxX = window.innerWidth - bobbel.offsetWidth;
  const maxY = window.innerHeight - bobbel.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  bobbel.style.left = `${randomX}px`;
  bobbel.style.top = `${randomY}px`;
}

/* Indsæt ubåd */

const gulUbaad = document.getElementById("gul-ubaad");

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


