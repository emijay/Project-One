// Gotta Catch Em All! //

// What are the objectives of the game?
    // To catch as many fruits as you can before time runs out!

// How do you play the game?
    // Avoid catching the bomb as you will lose points.
    // Game ends when the time is up or you click on Team Rocket.

// How can you make the game better?

    // Different pokemons dropping

// How can you improve the code? KISS and DRY


//-------- Global Variables --------//

let fruitNum = 0;
let currentScore = 0;
let timeleft = 60;
let livesLeft = 3;

let pokemon2 = "https://www.smogon.com/forums/proxy.php?image=http%3A%2F%2Fwww.pkparaiso.com%2Fimagenes%2Fxy%2Fsprites%2Fanimados%2Fplusle.gif&hash=770c575f28a30952ce3168e8336d76fc";
let totodile = "https://www.smogon.com/forums/proxy.php?image=http%3A%2F%2Fwww.pkparaiso.com%2Fimagenes%2Fxy%2Fsprites%2Fanimados%2Ftotodile.gif&hash=d6f735bfa8b0f2bdc133a1c1450faa3a";



//-------- Functions --------//

// To make the fruit drop by adding to their position from the top
const fruitDrop = () => {

    let fruitsInPlay = document.querySelector("#playArea").children;

    for (i = 0; i < fruitsInPlay.length; i ++) {
        let fruitChosen = fruitsInPlay[i].id;

        let curPosition = document.querySelector("#" + fruitChosen).style.top;
        let curPositionNum = parseInt(curPosition.replace(/[^0-9]/g, ''))

        let newPosition = curPositionNum + 1 + "px";

        document.querySelector("#" + fruitChosen).style.top = newPosition;
    }
}

// To create the fruit and randomize their starting position from the left at the top
const makeFruit = () => {

    let randomNum0to5 = Math.floor(Math.random() * 6); // for the start position array
    let randNum0to5 = Math.floor(Math.random() * 6); // for the fruit array
    let startPosition = [300,500,700,900,1100,1300];
    let fruitArray = ["🍍","🍒","🍌","🍓","🍎","💣"];
    let positionFromLeft = startPosition[randomNum0to5];
    let fruit = fruitArray[randNum0to5];

    let newFruit = document.createElement('p');

    newFruit.setAttribute('id', `fruit${fruitNum + 1}`);
    newFruit.textContent = fruit;
    newFruit.style.position = "absolute";
    newFruit.style.left = `${positionFromLeft}px`;
    newFruit.style.top = `0px`;
    document.querySelector("#playArea").appendChild(newFruit);

    fruitNum ++ ;

}

// To check when to remove the missed fruits from playing area
const removeFruit = () => {

    let fruitsInPlay2 = document.querySelector("#playArea").children;

    // console.log('Scanning the board')

    for (i = 0; i < fruitsInPlay2.length; i ++) {

        let fruitChosen2 = fruitsInPlay2[i].id;
        let curPosition2 = document.querySelector("#" + fruitChosen2).style.top
        let curPositionNum2 = parseInt(curPosition2.replace(/[^0-9]/g, ''))

        if (curPositionNum2 > 830) {
            let elem = document.querySelector("#" + fruitChosen2);
            elem.remove();
        }
    }

}

// To check when to add to player's current score
const checkScore = () => {

    let fruitsInPlay3 = document.querySelector("#playArea").children;

    // console.log('Scoring the board')

    for (i = 0; i < fruitsInPlay3.length; i ++) {

        let fruitChosen3 = fruitsInPlay3[i].id;

        let curPosTopFruit = document.querySelector("#" + fruitChosen3).style.top;
        let curPosTopFruitNum = parseInt(curPosTopFruit.replace(/[^0-9]/g, ''));

        let curPosLeftFruit = document.querySelector("#" + fruitChosen3).style.left;

        let curPosLeftCatcher = document.querySelector("#catcher").style.left;

        let fruitChosen3Text = document.querySelector("#" + fruitChosen3).textContent;

        // What to do when Pokemon is able to catch the food. Plus 1 to current score.
        if (curPosLeftFruit === curPosLeftCatcher && (curPosTopFruitNum > 700 && curPosTopFruitNum < 730) && fruitChosen3Text !== "💣" ) {

            yumYum();

            let elem = document.querySelector("#" + fruitChosen3);
            elem.remove();

            currentScore ++;

            document.querySelector("#score").textContent = currentScore;
        }

        // What to do when Pokemon catches the bomb. Minus 1 from current score.
        else if (curPosLeftFruit === curPosLeftCatcher && (curPosTopFruitNum > 700 && curPosTopFruitNum < 730) && fruitChosen3Text === "💣" ) {

            let elem = document.querySelector("#" + fruitChosen3);
            elem.remove();

            currentScore --;

            document.querySelector("#score").textContent = currentScore;

        // What to do when Pokemon misses catching the fruit. Update the lives left
        } else if (curPosLeftFruit !== curPosLeftCatcher && curPosTopFruitNum > 750 && fruitChosen3Text !== "💣") {

            livesLeft --;

            let parentIcon = document.querySelector(".icon-list").children;

            if (livesLeft === 2) {
                parentIcon[2].classList.add("is-empty");
            } else if (livesLeft === 1) {
                parentIcon[1].classList.add("is-empty");
            } else if (livesLeft === 0) {
                parentIcon[0].classList.add("is-empty");
            }
        }
    }
}

// To make the catcher at the bottom
const makePokemon = () => {

    let newPokemon = document.createElement('img');

    newPokemon.setAttribute('id', "catcher");
    newPokemon.style.position = "absolute";
    newPokemon.style.left = "800px";
    newPokemon.style.bottom = "50px";
    newPokemon.style.width = "100px";
    newPokemon.src = totodile;
    document.querySelector("#catchArea").append(newPokemon);
}

// To make the countdown timer and update DOM accordingly
const gameTimer = () => {

    timeleft-- ;
}

const whenToStopGame = () => {

    document.querySelector("#time-left").textContent = timeleft + "s";

    if (timeleft === 0 || livesLeft <= 0) {
        stopTheGame();
        alert('Countdown over!')
    }
}


// To know when to stop the game and clear all SetIntervals
const stopTheGame = () => {

    clearInterval(dropThemFruits);
    clearInterval(checkThemFruits);
    clearInterval(makeThemFruits);
    clearInterval(checkTheScore);
    clearInterval(timer);
    clearInterval(whenToStop);

}

const yumYum = () => {
    let sound = document.getElementById("yumyum");
    sound.play();
}

//     let song = document.getElementById("themeSong");
// const songLevelOne = () => {
//     song.play();
// }

// When you press the left and right keys to move the catcher
document.onkeydown = function(event) {

    let pokeball = document.querySelector("#catcher");
    let curPosLeft;
    let curPosLeftNum;
    let newPostLeft;

    switch (event.keyCode) {

        case 37:
        // When you press on the left arrow button
        curPosLeft = pokeball.style.left;

        curPosLeftNum = parseInt(curPosLeft.replace(/[^0-9]/g, ''));
        newPosLeft = curPosLeftNum - 100 + "px";

        document.querySelector("#catcher").style.left = newPosLeft;
        break;

        case 39:
        // When you press on the right arrow button
        curPosLeft = pokeball.style.left;
        curPosLeftNum = parseInt(curPosLeft.replace(/[^0-9]/g, ''));

        newPosLeft = curPosLeftNum + 100 + "px";

        document.querySelector("#catcher").style.left = newPosLeft;
        break;
    }
};


//-------- SetIntervals --------//

    makePokemon();

    // songLevelOne();

    setTimeout(() => {

        dropThemFruits = setInterval(fruitDrop,5);

        checkThemFruits = setInterval(removeFruit,500)

        checkTheScore = setInterval(checkScore,500)

        timer = setInterval(gameTimer, 1000);

        whenToStop = setInterval(whenToStopGame, 1000)

    },3000)

    setTimeout(() => {
        makeThemFruits = setInterval(makeFruit,3000);

    },1000);



//-------- AddEventListeners --------//
//
//
//
//
//
//