import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Livros from './pages/Livros/Livros';
import CadastroLivro from './pages/CadastroLivro/CadastroLivro';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path='/livros' element={<Livros/>}/>
              <Route path='/cadastrolivro' element={<CadastroLivro/>}/>
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
