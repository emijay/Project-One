// fruit ninja //

// What are the objectives of the game?

// How do you play the game?

// How do you win the game?

// How do you lose the game?

// How can you make the game better?

// How can you improve the code? KISS and DRY



//-------- Global Variables --------//

let fruit = "🍍";
let curPositionFromTop;
let positionFromLeft = 0;

let fruitBasket = 0;

//-------- Functions --------//

const fruitDrop = () => {

    for (i = 0; i < 3; i ++) {
        let fruitChosen = document.querySelector(`#fruit${i + 1}`);

        // This will return a string e.g "50px"
        let curPositionFromTop = fruitChosen.style.top;



        let newPositionFromTop = curPositionFromTop + 50;

        fruitChosen.style.top = `${newPositionFromTop}px`;
    }
}

const makeFruit = () => {

    for (i = 0; i < 3; i ++) {

        let newFruit = document.createElement('p');

        newFruit.setAttribute('id', `fruit${i + 1}`);
        newFruit.textContent = "🍍";
        newFruit.style.position = "absolute";
        newFruit.style.left = `${positionFromLeft}px`;
        document.querySelector("#playArea").appendChild(newFruit);

        positionFromLeft = positionFromLeft + 100;
    }

}

//-------- SetIntervals --------//

// makeFruit();

// setInterval(fruitDrop,1000);

// setInterval(makeFruit,3000);

clearInterval()

//-------- AddEventListeners --------//

document.querySelector(".fruit")