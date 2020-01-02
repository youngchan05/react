import React from 'react';
function List({todos}){
    return(
        <li>
            {todos.todo}
        </li>
    )
}
function TodoList(){
    const [todos ,setTodo] = ([
        
    ])
    return(
       <ul className="todo-list">
           <List todos={todos}></List>
       </ul>
    );
}
export default TodoList;