import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return(
    <section className='hero'>
      <div className='hero-body has-text-centered'>
      <Link to='/'>
        <span className='hero__title__container'>
          <p className='title'>
            PokedexGS
          </p>
          <img src="https://img.icons8.com/officel/80/000000/pokedex.png"/>
        </span>
      </Link>
      </div>
    </section>
  )
}

export default Hero;