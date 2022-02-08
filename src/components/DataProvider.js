import React,{useState,createContext,useEffect} from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    },[])

    
    useEffect(()=>{
        localStorage.setItem('todoStore',JSON.stringify(todos))
    },[todos])

    
    return(
        <div className="">
            <DataContext.Provider value={[todos,setTodos]}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}