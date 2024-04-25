import React from 'react';
import './cardBook.css';

function CardBook({ id, livro, autor, categoria }) {
  return (
    <div className='card-book'>
        <h4>{livro}</h4>
        <p>Autor: {autor}</p>
        <p className='card-book__category'>
          <span></span>
          {categoria}
        </p>
    </div>
  )
  
}

export default CardBook;