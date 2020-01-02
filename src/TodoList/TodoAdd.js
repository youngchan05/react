import React ,{useState} from 'react';
function TodoAdd(){
    const [todo , setTodo] = useState({
        id:0,
        todo:"",
    })
    const [text , setText] = useState({
        title:'',
    })
    const {title} = text;
    const todoChange = (e) =>{
        const {name, value} = e.target;
        setText({
            ...text,
            [name]:e.target.value,
        })
    }
    const todoCreate = () =>{
        const todos = {
            title,
        };
        setTodo(
            [...todo , todos]
        )
    }
    return(
        <div className="todoAdd">
            <strong className="title">ADD THE PLAN</strong>
            <p className="desc">we only plan today, and must be completed today :)</p>
            <div className="add-section">
                <input name="title" type="text" onChange={todoChange} placeholder="Title" value={title}/>
                <button type="button" onClick={todoCreate}>SAVE</button>
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