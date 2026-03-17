

"use strict";
const crab = document.getElementById("krabbe");
const crabTooltip = document.getElementById("krabbeTooltip");

krabbe.addEventListener("click", () => {
  krabbeTooltip.classList.toggle("is-visible");
});
























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

