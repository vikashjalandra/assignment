import React, { useState } from "react";
import Card from "./Card";

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [text, setText]= useState()
  

  const addCard = (e) => {
    e.preventDefault()
    const newCard = { id: cards.length + 1, text:text, x: 50, y: 50 };
    setCards([...cards, newCard]);
  };

  const textHandle =(e)=>{
    const txt = e.target.value
    setText(txt)
  }
  

  return (
    <div>
      <h1 className="text-white text-3xl">Add Cards</h1>
      <form onSubmit={addCard} className="mt-5 flex justify-center">

        <input className="w-3/4 h-10 rounded-lg p-3" type="text" name="" id="" onChange={textHandle} placeholder="Enter text"/>
      <button className="text-white bg-green-600 rounded-lg p-2 ml-3" type="submit">Add Card</button>
      </form>
      <div>

          {cards.map((card) => (
              <Card key={card.id} text={card.text} />
            ))}
            </div>
    </div>
  );
};

export default Canvas;
