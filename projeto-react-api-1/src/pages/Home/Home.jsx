import React from 'react';
import './home.css'

function Home() {
  return (
    <section className='home'>
      <div className='home__header'>
        <h1 className='home__title'>Bem vindo ao app <span>Libri</span></h1>
        <p>Comece a gerênciar seus livros agora mesmo!</p>
      </div>   
    </section>
  )
}

export default Home;