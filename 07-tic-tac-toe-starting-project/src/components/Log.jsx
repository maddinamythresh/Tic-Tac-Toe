export default function Log({turns}){
    return (

        <ol id="log">

            {turns.map(turn=> <li key={`${turn.square.row}${turn.square.col}`}>{turn.person} selected! {turn.square.row} row and {turn.square.col}</li>)}

        </ol>
    );
}

