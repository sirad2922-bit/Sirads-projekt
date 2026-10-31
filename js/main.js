"use strict";
/*
 * Projekt - Sirads Café
 * Namn: Sirad Ahmed
 */

//Hämtar element från HTML
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const form = document.querySelector("#kontaktformular");
const namnInput = document.querySelector("#namn");
const epostInput = document.querySelector("#epost");
const meddelandeInput = document.querySelector("#meddelande");
const tackEl = document.querySelector("#tack-meddelande");

//öppnar och stänger mobilmenyn
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
});

//Lägger till eventlistener på formuläret 
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        tackEl.textContent = "";

        //visar tack om alla fält är rätt ifyllda
        if (validateForm()) {
            tackEl.textContent = "Tack! Vi svarar så snart vi kan.";
            form.reset();
        }
    });
}

//kontrollerar att alla fält är rätt ifyllda
function validateForm() {
    let ok = true;

    //kontrollerar namnet
    if (namnInput.value.trim() === "") {
        displayError("#namn-fel", "Skriv ditt namn.");
        ok = false;
    } else {
        displayError("#namn-fel", "");
    }

    //kontrollerar e-posten
    if (!epostInput.value.includes("@")) {
        displayError("#epost-fel", "Skriv en giltig e-postadress.");
        ok = false;
    } else {
        displayError("#epost-fel", "");
    }

    //kontrollerar meddelandet
    if (meddelandeInput.value.trim().length < 10) {
        displayError("#meddelande-fel", "Meddelandet måste vara minst 10 tecken.");
        ok = false;
    } else {
        displayError("#meddelande-fel", "");
    }

    return ok;
}

//skriver ut ett felmeddelande under fältet
function displayError(id, message) {
    document.querySelector(id).textContent = message;
}