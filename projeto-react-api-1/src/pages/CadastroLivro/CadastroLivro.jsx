import React, { useEffect, useState } from 'react';
import './cadastroLivro.css';

import Input from '../../components/Form/Input/Input';
import Select from '../../components/Form/Select/Select';

function CadastroLivro() {

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
      (data) =>{
        setCategories(data)
      }
    ).catch(
      (error) =>{
        console.log(error);
      }
    )
  }, []);

  return (
    <section className='cadastro-Livro'>
        <h1 className='cadastro-Livro__title'>Cadastro de <span>Livros</span></h1>
        <form className='cadastro-livro__form'>
          <div>
            <Input type='text' name='nome_livro' id='nome_livro'  text='Titulo do livro'/>
            <Input type='text' name='nome_autor' id='nome_autor' text='Autor'/>
            <Input type='text' name='descricao' id='descricao' text='Descrição'/>
            <Select name='categoria_id' text='Categoria' options={categories}/>   
          </div>    
          <button className='cadastro-livro__button-submit' type='submit' value='Criar'>Criar</button>
        </form>
    </section>
  )
}

export default CadastroLivro;