import React from 'react';
import './select.css';

function Select({ text, name, options, handlerOnChange, value }) {
  return (
    <div className='select'>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione...</option>
        {
          options.map((option) =>{
            return(
              <option value={option.id} key={option.id}>{option.name}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Select;