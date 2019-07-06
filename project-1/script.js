// Gotta Catch Em All! //

// What are the objectives of the game?
    // To catch as many pokemon as you can before time runs out!

// How do you play the game?
    // Avoid catching Team Rocket or lose the game!
    // Game ends when the time is up or you click on Team Rocket.

// How do you win the game?

// How do you lose the game?

// How can you make the game better?

    // Different pokemons dropping
    // Smoothen the dropping animation
    //

// How can you improve the code? KISS and DRY


//-------- Global Variables --------//

let fruit = "🍍";
let fruitNum = 0;
let curPositionFromTop;
let fruitBasket = 0;
let intervalOfDrops;

//-------- Functions --------//

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

const makeFruit = () => {

    let randomNum0to5 = Math.floor(Math.random() * 6);
    let startPosition = [300,500,700,900,1100,1300,1500];
    let positionFromLeft = startPosition[randomNum0to5];

    let newFruit = document.createElement('p');

    newFruit.setAttribute('id', `fruit${fruitNum + 1}`);
    newFruit.textContent = "🍍";
    newFruit.style.position = "absolute";
    newFruit.style.left = `${positionFromLeft}px`;
    newFruit.style.top = `0px`;
    document.querySelector("#playArea").appendChild(newFruit);

    fruitNum ++ ;

}

const startGame = () => {
    makeFruit();
}

const stopTheGame = () => {
    clearInterval(dropThemFruits);
    clearInterval(checkThemFruits);
    clearInterval(makeThemFruits);
}

const removeFruit = () => {

    let fruitsInPlay2 = document.querySelector("#playArea").children;

    // console.log('Scanning the board')

    for (i = 0; i < fruitsInPlay2.length; i ++) {

        let fruitChosen2 = fruitsInPlay2[i].id;
        let curPosition2 = document.querySelector("#" + fruitChosen2).style.top
        let curPositionNum2 = parseInt(curPosition2.replace(/[^0-9]/g, ''))

        if (curPositionNum2 > 850) {
            let elem = document.querySelector("#" + fruitChosen2);
            elem.remove();
        }
    }

}

// //

// document.onkeydown = checkKey;

// function checkKey(e) {

//     e = e || window.event;

//     if (e.keyCode == '38') {
//         // up arrow
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//     }

// }


//-------- SetIntervals --------//

dropThemFruits = setInterval(fruitDrop,5);

checkThemFruits = setInterval(removeFruit,200)

makeThemFruits = setInterval(makeFruit,3000);


//-------- AddEventListeners --------//
let pokeball = document.querySelector("#catcher");
pokeball.AddEventListener('')
//
//
//
//