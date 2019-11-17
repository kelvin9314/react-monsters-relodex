import React , { useState, useEffect } from 'react';
import logo from './logo.svg';
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
      {monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
    </div>
  );
}

export default App;
