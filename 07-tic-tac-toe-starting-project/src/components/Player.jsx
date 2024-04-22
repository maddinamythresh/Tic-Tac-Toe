import { useState } from "react";   

export default function Player({name, symbol, isActive}){
    const [edit,setEditing]=useState(false);
    const [initialName,setInitialName]=useState(name);
    
    

    function handleClick(){
        setEditing((edit)=> !edit);
    }

    function handleName(event){
        setInitialName(event.target.value);
    }
    
    

    let playerName=<span className="player-name">{initialName}</span>;
    let buttonName="Edit"
    
    if(edit){
        buttonName="Save";
        
        playerName=(<input type="text" value={initialName}  onChange={handleName} />);

    }

    return (
        <li className={isActive?"active":undefined}>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleClick}>{buttonName}</button>
        </li>
    );

}