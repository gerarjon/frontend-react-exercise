import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from '../components/SearchResults';

const URL = "https://pokeapi.co/api/v2/pokemon/"

// Name, description, types, image

const Search = ({addToFavorites}) => {
  const [pokemon, setPokemon] = useState({
    name: '',
    sprite: '',
    type: [],
    hp: '',
    attack: '',
    defense: '',
    spAttack: '',
    spDefense: '',
    speed: '',
    number: ''
  });
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const getPokemon = async () => {
    try {
      const searchLowerCase = search.toLowerCase();
      const res = await axios.get(URL + searchLowerCase);
      setPokemon({
        name: res.data.name,
        sprite: res.data.sprites.front_default,
        type: res.data.types,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        spAttack: res.data.stats[3].base_stat,
        spDefense: res.data.stats[4].base_stat,
        speed: res.data.stats[5].base_stat,
        number: res.data.id
      })
      setErrorMessage('')
    } catch (err) {
      setPokemon('')
      setErrorMessage('Pokemon not found. Please try again!')
    }
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
    setSearch('')
  }

  return (
    <article className='container'>
      <section className='search__container'>
        <form 
          className='field has-addons'
          onSubmit={handleSubmit}>
          <div className='control is-expanded'>
            <input 
              className='input'
              type='text'
              id={search} 
              name={search} 
              value={search} 
              placeholder='Pokemon'
              onChange={handleInputChange}/>
          </div>
          <div className='control'>
            <button 
              className='button'
              type='submit'>
              Search
            </button>
          </div>
        </form>
      </section>

      <section className='section results__container'>
      {
        pokemon.name ? 
        <>
          <SearchResults pokemon={pokemon} />
          <button className='button is-primary' onClick={() => addToFavorites(pokemon)}>Save</button>
        </>
        :
        <h1>{errorMessage}</h1>
      }
      </section>
    </article>
  )
}

export default Search;