"use strict";

const krabbe = document.getElementById("krabbe");
const krabbeTooltip = document.getElementById("krabbeTooltip");

krabbe.addEventListener("click", () => {
  krabbeTooltip.classList.toggle("is-visible");
});

// taleboble til søhest som følger med den //

const sohest = document.getElementById("sohest");
const sohestTooltip = document.getElementById("sohestTooltip");
const scene1 = document.getElementById("scene1");

let following = false;

sohest.addEventListener("click", () => {
  following = !following; // tænd/sluk

  sohestTooltip.classList.toggle("is-visible");

  if (following) {
    followSohest();
  }
});

function followSohest() {
  if (!following) return;

  const rect = sohest.getBoundingClientRect();
  const scene1Rect = scene1.getBoundingClientRect();

  const x = rect.left - scene1Rect.left + rect.width / 2;
  const y = rect.top - scene1Rect.top;

  sohestTooltip.style.left = x + "px";
  sohestTooltip.style.top = (y - 100) + "px";
  sohestTooltip.style.transform = "translateX(-50%)";

  requestAnimationFrame(followSohest); //  kører hele tiden
}





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

