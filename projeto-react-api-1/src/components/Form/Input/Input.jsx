import React from 'react';
import './input.css';

function Input({ type, text, name, handlerOnChange, value }) {
  return (
    <div className='input'>
        <label htmlFor={name}>{text}</label>
        <input type={type} name={name} id={name} onChange={handlerOnChange} value={value}/>
    </div>
  )
}

export default Input;