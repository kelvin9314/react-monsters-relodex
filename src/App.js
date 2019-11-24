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

  return (
    <div className="App">
      <SearchBox 
        placeholder="search monster"
        handleChange={e => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters} /> 
    </div>
  );
}
export default App;