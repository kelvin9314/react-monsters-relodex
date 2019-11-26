import React , { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'
import './App.css';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setMonsters(users)
        setFilteredMonsters(users)
      })
  }, []);

  useEffect(() => {
    setFilteredMonsters(() =>　monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    ))
  }, [searchField]);

  const handleChange = e => {
    setSearchField(e.target.value)
  }
  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox 
        placeholder="search monster"
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters} /> 
    </div>
  );
}
export default App;