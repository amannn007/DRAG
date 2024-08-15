import React, { useState } from 'react';
import Card from './Card';

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const addCard = () => {
    setCards([...cards, dummyText]);
  };

  return (
    <div className="canvas-wrapper">
      <button onClick={addCard}>Add Card</button>
      <div className="canvas">
        <div className="cards-container">
          {cards.map((cardText, index) => (
            <Card key={index} text={cardText} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
