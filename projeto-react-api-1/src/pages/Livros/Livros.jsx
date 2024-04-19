import React from 'react';
import { useLocation } from 'react-router-dom';
import './livros.css';
import Message from '../../components/Message/Message';
import CardBook from '../../components/CardBook/CardBook';

function Livros() {

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
        <div>
          <CardBook/>
        </div>
      </div>
      {
        message && (
          <Message
            msg={message}
            type="success"/>
        )
      }
    </section>
  )
}

export default Livros;