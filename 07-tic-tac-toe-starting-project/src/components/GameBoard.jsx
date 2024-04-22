import { useState } from "react";
import Player from "./Player";




export default function GameBoard({board,onSelectSquare}){

   
    return(
        
        <ol id="game-board" is>
            
            {board.map((row, rowIndex)=> <li key={rowIndex}>
            <ol>    
                {row.map((symbol,colIndex)=> <li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={symbol!=null}>{symbol}</button>
                </li>)}
            </ol>
            </li>
            )}

        </ol>
    );
}