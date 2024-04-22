export default function GameOver({msg,handlematch}){
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{msg} </p>
            <button onClick={handlematch}>Rematch</button>
        </div>
    );
}