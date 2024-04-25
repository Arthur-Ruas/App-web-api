import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './livros.css';

import Message from '../../components/Message/Message';
import Container from '../../components/Container/Container';
import CardBook from '../../components/CardBook/CardBook';

function Livros() {

  const [booksArray, setBooksArray]  = useState([]);

  useEffect(() =>{
    fetch(
      'http://localhost:5000/books', 
      { 
        method: 'GET',
        headers: {
          'Content-Type':'application/json'
        }
      }
    ).then(
      (response) => response.json()
    ).then(
      (data) => {setBooksArray(data)}
    ).catch(
      (error) => console.log(error)
    )
  }, []);

  const location = useLocation();
  let message = '';

  console.log('Location state: ' + location.state)

  if(location.state){
    message = location.state;
  }

  return (
    <section className='livros'>
      <div className='livros__header'>
        <h1 className='livros__title'>Aqui serão listados os <span>Livros!</span></h1>
        <p>Seus livros preferidos aparecerão aqui!</p>
      </div>
      {
        message && (
          <Message
            msg={message}
            type="success"/>
        )
      }

      {
        booksArray.map((book) =>{
          return(
            <CardBook 
              id={book.id}
              livro={book.nome_livro}
              autor={book.nome_autor}
              categoria={book.category.category}/>
          );   
        })
      }
    </section>
  )
}

export default Livros;