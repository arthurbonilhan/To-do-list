import React from 'react';
import './styles/main.css'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;
