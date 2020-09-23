const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = require("./board.js")
let p1Board = new board()
let p2Board = new board()

p1Board.generateBoats()
p2Board.generateBoats()

let turnsPlayed = 0
let p1Square = ""
let p2Square = ""

let playedGame = false

console.log("Welcome to Battleships. This a two player game where you have to find each other's ships. The x axis is along the top and y axis is along the side. If you want to hit the point x=1, y=3, then enter 13 when prompted on your turn. X means you hit the ship and - means there was no ship in the square. Below is an example board.")
p1Board.getBoard()

function mainGame(){
  if(turnsPlayed % 2 === 0){
    console.log("P1's turn")
    turnsPlayed++
    chooseSquare1()
  }
  else{
    console.log("P2's turn")
    turnsPlayed++
    chooseSquare2()
  }
}

function chooseSquare1(){
  rl.question("Hit a square: ", (answer) => {
    // TODO
    hitSquareP1(answer)
  });
}
function chooseSquare2(){
  rl.question("Hit a square: ", (answer) => {
    // TODO
    hitSquareP2(answer)
  });
}

function hitSquareP1(square){
  if(p1Board.hit(parseInt(square[0]),parseInt(square[1]))){
    p1Board.getBoard()
    winGame("P1")
  }
  else{
    p1Board.getBoard()
    mainGame()
  }
}

function hitSquareP2(square){
  if(p2Board.hit(parseInt(square[0]),parseInt(square[1]))){
    p2Board.getBoard()
    winGame("P2")
  }
  else{
    p2Board.getBoard()
    mainGame()
  }
}

function winGame(winner){
  console.log(winner, "wins!")
  rl.close()
}

if(!playedGame){
  playedGame = true
  mainGame()
}