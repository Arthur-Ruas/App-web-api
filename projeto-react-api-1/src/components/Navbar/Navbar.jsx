import React from 'react';
import './navbar.css';
import { Outlet, Link } from 'react-router-dom';
import Container from '../Container/Container';

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='navbar__list'>
            <li className='navbar__item'>
                <Link to='/' className='navbar__link'>Home</Link>
            </li>
            <li className='navbar__item'>
                <Link to='/livros' className='navbar__link'>Livros</Link>
            </li>
            <li className='navbar__item'>
                <Link to='/cadastrolivro' className='navbar__link'>Novo livro</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Navbar;