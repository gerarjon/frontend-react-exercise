import React, { useState } from 'react';
import SearchResults from '../components/SearchResults';

const Favorites = ({favorites, removeFromFavorites}) => {
  const [activePokemon, setActivePokemon] = useState('')

  console.log(activePokemon)

  return (
    <article className='container'>
      <div className='favorites__container columns is-mobile'>
        <div className='column'>
        <h3 className='is-size-3 title'>Favorites</h3>
          <div className='favorites__list__names'>
            <ul>
              { favorites.map((pokemon) => (
                <li 
                  className='pokemon__name box'
                  key={pokemon.number}
                >
                  <div
                    className='name is-capitalized subtitle'
                    onClick={() => setActivePokemon(pokemon)}
                    >
                      {pokemon.name}
                  </div>
                  <button 
                    onClick={() => removeFromFavorites(pokemon.number)} 
                    className='delete'
                    >
                      Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className='column'>
          {
            activePokemon ?
            <SearchResults pokemon={activePokemon}/>
            :
            <h4 className='is-size-4'>Please Select a Pokemon</h4>
          }
        </div>
      </div>
    </article>
  )
}

export default Favorites;