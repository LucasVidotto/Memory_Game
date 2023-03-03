import React, { useState } from "react";
import styled from "styled-components";
import * as A from './StyledGame';
import Card from "./Components/Card";

const Game= () => {
  const [cards, setCards] = useState([
    {id: 1, value: 1, clicked: false},
    {id: 2, value: 1, clicked: false},
    {id: 3, value: 2, clicked: false},
    {id: 4, value: 2, clicked: false},
    {id: 5, value: 3, clicked: false},
    {id: 6, value: 3, clicked: false},
    {id: 7, value: 4, clicked: false},
    {id: 8, value: 4, clicked: false},
    {id: 9, value: 5, clicked: false},
    {id: 10, value: 5, clicked: false},
    {id: 11, value: 6, clicked: false},
    {id: 12, value: 6, clicked: false},

  ])

  const handlerCLick = (index : number) =>{
    let NewCard = [...cards]
      NewCard[index].clicked = !NewCard[index].clicked;
      setCards(NewCard) 
  }
  return (
    <A.Container>
      {cards.map((item,index) =>(
       <>
        <Card 
        key={index}
        id={item.id}
        value={item.value}
        onClick={()=> handlerCLick(index)}
        clicked={item.clicked}

        />
       </>
        
      ))}
    </A.Container>
    
  );
};

export default Game;
