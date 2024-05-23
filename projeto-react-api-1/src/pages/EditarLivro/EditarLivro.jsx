import React, { useEffect, useState } from 'react';
import './editarLivro.css';
import { useParams, useNavigate } from 'react-router-dom';

import Input from '../../components/Form/Input/Input';
import Select from '../../components/Form/Select/Select';

function EditarLivro() {

  const navigate = useNavigate();
    
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    fetch(
      'http://localhost:5000/categories',
      {
        method: 'GET',
        headers:{
          'Content-Type':'application/json'
        }
      }
    ).then(
      (response) => response.json()
    ).then(
      (data) => setCategories(data)
    ).catch(
      (error) => console.log(error)
    )
  }, []);

  useEffect(() =>{
    fetch(
      `http://localhost:5000/books/${id}`,
      {
        method: 'GET',
        headers:{
          'Content-Type':'application/json'
        }
      }
    ).then(
      (response) => response.json()
    ).then(
      (data) => setBook(data)
    ).catch(
      (error) => console.log(error)
    )
  }, []);

  function handlerChangeBook(event){
  setBook({...book, [event.target.name] : event.target.value});
  }
  
  function handlerChangeCategory(event){
  setBook({...book, category: {
      id: event.target.value,
      category: event.target.options[event.target.selectedIndex].text
    }});
  }

  function editBook(book){
    fetch(`http://localhost:5000/books/${book.id}`, 
      {
        method: 'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(book)
      }
    ).then(
        (response) => response.json()
    ).then(
      navigate('/livros', {state: 'Livro editado com sucesso!'})
    ).catch(
        (error) => console.log(error)
    )
  }
  
  function submit(event){
    event.preventDefault();
    editBook(book);
  }

  return (
    <div className='editar-livro'>
        <div className='editar-livro__header'>
            <h1 className='editar-livro__title'>Edite seu <span>Livro</span></h1>
            <p>Mude os dados dos livros aqui mesmo!</p>
        </div>   
        <form className='editar-livro__form' onSubmit={submit}>
            <div>
                <Input type='text' name='nome_livro' id='nome_livro'  text='Titulo do livro' value={book.nome_livro} handlerOnChange={handlerChangeBook}/>
                <Input type='text' name='nome_autor' id='nome_autor' text='Autor' value={book.nome_autor} handlerOnChange={handlerChangeBook}/>
                <Input type='text' name='descricao' id='descricao' text='Descrição' value={book.descricao} handlerOnChange={handlerChangeBook}/>
                <Select name='categoria_id' text='Categoria' options={categories} handlerOnChange={handlerChangeCategory}/>   
            </div>    
            <button className='editar-livro__button-submit' type='submit' value='Editar'>Alterar Livro</button>
        </form>
    </div>
  )
}

export default EditarLivro;