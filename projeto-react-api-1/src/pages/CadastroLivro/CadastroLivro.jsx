import React, { useEffect, useState } from 'react';
import './cadastroLivro.css';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Form/Input/Input';
import Select from '../../components/Form/Select/Select';

function CadastroLivro() {

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [book, setBook] = useState([]);

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

  function handlerChangeBook(event){
    setBook({...book, [event.target.name] : event.target.value});
  }

  function handlerChangeCategory(event){
    setBook({...book, category: {
      id: event.target.value,
      category: event.target.options[event.target.selectedIndex].text
    }});
  }

  function createBook(book){
    fetch('http://localhost:5000/books', 
      {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(book)
      }
    ).then(
      (response)=>response.json()

    ).then(
      (data)=>{
        console.log(data);
        navigate('/livros', {state: 'Livro cadastrado com sucesso!'});
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }

  function submit(event){
    event.preventDefault()
    createBook(book)
  }

  return (
    <section className='cadastro-Livro'>
      <div className='cadastro-livro__header'>
        <h1 className='cadastro-Livro__title'>Cadastro de <span>Livros</span></h1>
        <p>Cadastre seus livros preferidos aqui!</p>
      </div>
      <form className='cadastro-livro__form' onSubmit={submit}>
        <div>
          <Input type='text' name='nome_livro' id='nome_livro'  text='Titulo do livro' handlerOnChange={handlerChangeBook}/>
          <Input type='text' name='nome_autor' id='nome_autor' text='Autor' handlerOnChange={handlerChangeBook}/>
          <Input type='text' name='descricao' id='descricao' text='Descrição' handlerOnChange={handlerChangeBook}/>
          <Select name='categoria_id' text='Categoria' options={categories} handlerOnChange={handlerChangeCategory}/>   
        </div>    
        <button className='cadastro-livro__button-submit' type='submit' value='Criar'>Criar Livro</button>
      </form>
    </section>
  )
}

export default CadastroLivro;