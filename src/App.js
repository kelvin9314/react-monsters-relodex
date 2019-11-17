import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initMonthers = [
  {name: 'Frankenstein',id:1},
  {name: 'Dracula',id:2},
  {name: 'Zombie',id:3},
]

function App() {

  const [monsters, setMonsters] = useState(initMonthers);

  return (
    <div className="App">
     {monsters.map(monster => (
       <h1 key={monster.id}>{monster.name}</h1>)
     )}
    </div>
  );
}

export default App;
