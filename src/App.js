import React,{useState} from 'react';
import TodoHeader from './TodoList/TodoHeader';
import TodoList from './TodoList/TodoList';
import TodoAdd from './TodoList/TodoAdd';
import './TodoList/reset.css';
import './TodoList/style.scss';

function App() {
  const [inputs , setInputs] = useState({
    title:'',
  })
  const onChange = (e) => {
    const {value,name} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  const addTodo = ()=>{
    const todo = {
      title:'',
    };
    
  }
  return(
    <div className="todo-wrap">
      <TodoHeader/>
      <TodoList></TodoList>
      <TodoAdd onChange={onChange} addTodo={addTodo} title={inputs.title}></TodoAdd>
    </div>
  )
}
export default App;
