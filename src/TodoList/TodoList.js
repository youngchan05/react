import React from 'react';
function List({todo}){
    return(
        <li>
            {todo.todo}
        </li>
    )
}
function TodoList(){
    const todos = [
        {
            id:0,
            todo:"go home",
            date:"2021"
        },
    ]
    return(
        <ul className="todo-list">
            {
                todos.map(todo => <List todo={todo} key={todo.id}/>)
            }
        </ul>
    );
}
export default TodoList;