import React from 'react';

const SearchResults = ({pokemon}) => {
  return(
    <div id={pokemon.id} className='search__result'>
      <div className='columns'>

        <div className='column'>
          <h1 className='title is-capitalized'>{pokemon.name} <span>(#{pokemon.number})</span></h1>
          <figure className='image sprite-image'>
            <img src={pokemon.sprite} />
          </figure>
          <div>
            <ul className='types__container'>
              <span>Type(s):</span>
              {pokemon.type.map((item, index) => (
                <li 
                  key={index}
                  className='pokemon__type'>
                  {item.type.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='column'>
          <div className='stats__container'>
            <h2 className='is-size-3'>
              Stats
            </h2>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>SpAttack: {pokemon.spAttcak}</p>
            <p>SpDefense: {pokemon.spDefense}</p>
            <p>Speed: {pokemon.speed}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SearchResults;