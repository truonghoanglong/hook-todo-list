import React,{useContext,useState} from 'react';
import { DataContext } from './DataProvider';
const Footer = () => {

  const [checkAll,setCheckAll] = useState(false)
  const [todos,setTodos] = useContext(DataContext)

  const handleCheckAll = () =>{
    const newTodo = [...todos]
    newTodo.forEach((todo)=>{
      todo.complete = !checkAll
    })
    setTodos(newTodo)
    setCheckAll(!checkAll)
  }

  const deleteTodo = (id) => {
    
    setTodos(newTodoComplete())
    setCheckAll(false)
  }

  const newTodoComplete = () =>{
    return todos.filter(todo => todo.complete === false)
  }

  return (
    <>
      {
        todos.length === 0 ? <h2>Congratulation! Nothing To Do</h2>
        : 
        <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll} />
          ALL
        </label>
        <p>You have {newTodoComplete().length} todo</p>
        <button id="delete" onClick={deleteTodo}>Delete</button>
      </div>
      }
    </>
  );
};

export default Footer;
