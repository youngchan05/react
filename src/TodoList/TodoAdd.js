import React  from 'react';
function TodoAdd({onChange,title,addTodo}){
    return(
        <div className="todoAdd">
            <strong className="title">ADD THE PLAN</strong>
            <p className="desc">we only plan today, and must be completed today :)</p>
            <div className="add-section">
                <input name="title" type="text" onChange={onChange} placeholder="Title"/>
                <button type="button" onClick={addTodo}>SAVE</button>
            <div className="todo-status">
                <ul>
                    <li>
                        <span>1</span>
                    </li>
                    <li>
                        <span>2</span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
}
export default TodoAdd;