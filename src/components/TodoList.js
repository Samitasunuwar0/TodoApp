import React from 'react'

const TodoList = ({todo, setTodo}) => {

    const handleComplete = (todo) =>{
        setTodo(
            todo.map((item) =>{
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }
    const handleDelete = ({id}) => {
        setTodo(todo.filter((todo) => todo.id !== id));
    }
  return (
    <div>
       {todo.map((todo) => (
        <li className="list-item" key={todo.id}>
            <input 
            type="text" 
            value={todo.title} 
            className="list" 
            onChange={(event) => event.preventDefault()}
        />
        <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                <i class="uil uil-check-circle"></i>
            </button>
            <button className="button-edit task-button">
                <i className="uil uil-edit"></i>
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                <i className="uil uil-trash"></i>
            </button>
        </div>
        </li>
       ))}
    </div>
  )
}

export default TodoList