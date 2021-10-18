let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
function whoNext(nextPlayer){
    if(nextPlayer == "X"){
        nextPlayer = "O";
    }
    else{
        nextPlayer = "X";
    }
    document.getElementById("next-lbl").innerHTML = nextPlayer;
    return nextPlayer;
}


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    whoNext();
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let play = document.querySelectorAll('td');
    for(let i = 0; i < play.length; i++){
        play[i].innerHTML ='<button type="button">[ ]</button>';
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
        let clickbtn = event.target;
        
        // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
        if(clickbtn.disabled == false){
            clickbtn.innerText = ("[" + nextPlayer + "]");
            clickbtn.disabled = true;
            nextPlayer = whoNext(nextPlayer);
        }
        
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    };


    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let check = 0;
    let btns = document.querySelectorAll('button');
    // This function returns true if all the buttons are disabled and false otherwise 
    for(let i = 0; i < btns.length; i++){
        if(btns[i].disabled == true){
            check++;
        }
    }
    if(check == 9){
        return true;
    }
    else{
        return false;
    }
}
