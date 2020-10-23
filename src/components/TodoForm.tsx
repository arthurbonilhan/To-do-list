import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props: { edit: { value: any; }; onSubmit: (arg0: { id: number; text: any; }) => void; }) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef('');

  const handleChange = (e: { target: { value: any; }; }) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Digite'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
          />
          <button onClick={handleSubmit} className='todo-button'>
              <img src="./img/ic-delete.png" alt=""/>
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;