import ListItem from "./ListItem";
import React,{useContext} from "react"
import {DataContext} from "./DataProvider"

const List = () => {
    const [todos,setTodos] = useContext(DataContext)
    const switchComplete = (id) =>{
        const newTodo = [...todos]
        newTodo.forEach((todo,index)=>{
            if(index === id) todo.complete = !todo.complete
        })
        setTodos(newTodo)
    }

    const handleEditTodo = (editValue,id) => {
        const newTodos  = [...todos]
        newTodos.forEach((todo,index)=>{
            if(index === id){
                todo.name = editValue
            }
        })
        setTodos(newTodos)
    }

    return (
        <>
            <ul>
                {
                    todos.map((todo,index)=>{
                        return (
                            <ListItem todo={todo} key={index} id={index} 
                            checkComplete={switchComplete}
                            handleEditTodo ={handleEditTodo}
                            />
                        )                      
                    })
                }
            </ul>
        </>
    );
};

export default List;
