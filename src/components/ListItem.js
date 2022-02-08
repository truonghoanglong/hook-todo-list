import React, { useState } from "react";
const ListItem = (props) => {
  const { todo, id, checkComplete,handleEditTodo } = props;

  const [onEdit, setOnEdit] = useState(false);
  const [editValue,setEditValue] = useState(todo.name);

  const handleOnclick = () => {
    setOnEdit(!onEdit);
  };
  const handleSave = (id) =>{
    setOnEdit(!onEdit);
    if(editValue){
      handleEditTodo(editValue,id);
    }else{
      setEditValue(todo.name)
    }
  }


  if (onEdit) {
    return (
      <li>
        
          <input
            
            type="text"
            id="editValue"
            value={editValue} 
            name="editValue"
            onChange={(e)=>{setEditValue(e.target.value.toLowerCase())}}
          />
       
        <button onClick={()=>handleSave(id)} >
          Save
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <button disabled={todo.complete} onClick={handleOnclick}>
          Edit
        </button>
      </li>
    );
  }
};

export default ListItem;
