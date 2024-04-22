import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/WINNING_COMBINATIONS.js";
import { useState } from "react";
import GameOver from "./components/GameOver.jsx";


const initialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]
function derivative(game){
  let currPlayer="X";
  if(game.length>0 && game[0].person==="X"){
    currPlayer="O";
  }
  return currPlayer;
}
function App() {
  const [game,setGame]=useState([]);
  const activePlayer=derivative(game);
  let gameBoard=[...initialBoard.map(array=>[...array])];

  
  let winner=null;
    for(const turn of game){
        const {square, person}=turn;  
        const {row,col}=square;
        gameBoard[row][col]=person;
    }
    for( const combinations of WINNING_COMBINATIONS){
      const first=gameBoard[combinations[0].row][combinations[0].column]
      const second=gameBoard[combinations[1].row][combinations[1].column]
      const third=gameBoard[combinations[2].row][combinations[2].column]
      if((first && second===third && first===third)){
        winner=first;
      }
    }
    
  function handlePlayer(rowIndex,colIndex){
    setGame((currArr)=>
        {
          const currPlayer=derivative(game);
          const updateArr=[
            {square:{row: rowIndex, col:colIndex}, person:currPlayer},
          ...currArr]
          return updateArr;
        });
    

  }
  function handleRematch(){

    setGame([]);
    
  }
  
  return (
    <>
    <Header />
    <div id="game-container">

      <ol id="players" className="highlight-player">
         <Player name="Player1" symbol="X" isActive={activePlayer==="X"}/>
         <Player name="Player2" symbol="O" isActive={activePlayer==="O"}/>
      </ol> 
      {winner? <GameOver msg={`Player ${winner} Won!`} handlematch={handleRematch}/>: game.length==9 && <GameOver msg="Draw Match" handlematch={handleRematch}/>}
      <GameBoard board={gameBoard} onSelectSquare={handlePlayer} />
    </div>
    <Log turns={game}></Log>    
    </>
  );
}

export default App
