import React from 'react';
import Card from './Card';
import './styles/list.css';


function List(props) {
  const card = props.cards.map(card => {
    return <Card key={card.id} title={card.title} content={card.content} />
  });
  return (
    <section className='List'>
      <header className='List-header'>
      <h2>{props.header}</h2>
    </header>
    <div className='List-cards'>
      {card}
      <button type="button" className="List-add-button">
        + Add Random Card
      </button>
    </div>
    </section>
  );
}

export default List;