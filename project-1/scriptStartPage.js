let pokemonChosen;

// Function for the soundbites when mouse over each pokemon
const bulbasaurSound = () => {
    let sound = document.getElementById("pickBulbasaur");
    sound.play();
}

const squirtleSound = () => {
    let sound = document.getElementById("pickSquirtle");
    sound.play();
}

const charmanderSound = () => {
    let sound = document.getElementById("pickCharmander");
    sound.play();
}

const pikachuSound = () => {
    let sound = document.getElementById("pickPikachu");
    sound.play();
}

// When user clicks on the "Let's Play" button
document.querySelector("#letsPlay").onclick = function () {
    location.href = "levelOne.html";
};

// AddEventListeners for each Pokemon
document.querySelector("#bulbasaur").addEventListener('mouseover', bulbasaurSound);
document.querySelector("#squirtle").addEventListener('mouseover', squirtleSound);
document.querySelector("#charmander").addEventListener('mouseover', charmanderSound);
document.querySelector("#pikachu").addEventListener('mouseover', pikachuSound);