import React , { useState, useEffect } from 'react';
import { CardList } from './components/card-list/cardList'
import './App.css';

function App() {

  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, []);

  return (
    <div className="App">
      <CardList name="Leo"> 
        {monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
       </CardList>
    </div>
  );
}
export default App;
