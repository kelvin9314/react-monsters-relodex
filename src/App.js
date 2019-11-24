import React , { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list'
import './App.css';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, []);

  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  return (
    <div className="App">
      <input type="search" placeholder="search monster" onChange={e => setSearchField(e.target.value)}/>
      <CardList monsters={monsters} /> 
    </div>
  );
}
export default App;