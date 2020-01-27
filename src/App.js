import React from "react";
import List from "./List";

import './styles/app.css';

function App(props) {
  const list = props.store.lists.map(list => {
   return <List
      key={list.id}
      header={list.header}
      cards={list.cardIds.map(id => props.store.allCards[id])}
    />;
  });

  console.log(list);
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {list}
      </div>
    </main>
  );
}

export default App;
