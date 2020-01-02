import React,{useState} from 'react';
import TodoHeader from './TodoList/TodoHeader';
import TodoList from './TodoList/TodoList';
import TodoAdd from './TodoList/TodoAdd';
import './TodoList/reset.css';
import './TodoList/style.scss';

function App() {
  return(
    <div className="todo-wrap">
      <TodoHeader/>
      <TodoList></TodoList>
      <TodoAdd></TodoAdd>
    </div>
  )
}
export default App;
