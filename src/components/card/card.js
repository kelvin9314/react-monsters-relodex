import React from 'react'

import './card.styles.css'

export const Card = props => {
  const {monster} = props

  return(
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&side=180x180`} />> 
      <h2 >{monster.name}</h2>
      <p> {monster.email} </p>
    </div>
  )
}