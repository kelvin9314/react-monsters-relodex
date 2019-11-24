import React , { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list'
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
      <CardList monsters={monsters} /> 
    </div>
  );
}
export default App;
