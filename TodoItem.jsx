import React, { useState } from 'react'

const TodoItem = (props) => {
    const{todo,handleDelete,handleEditTodo}=props
    const[editText,seteditText]=useState("")
    const[editId,setEditId]=useState(null)

   const handleEdit=(id,title)=>{
      seteditText(title);
      setEditId(id);

    }
    const handleInputChange=(event)=>{
      seteditText(event.target.value);
      
    }
    const handleSave=(id)=>{
      handleEditTodo(id,editText)
      alert(`saved:${editText}`);
      setEditId(null)
      seteditText(" ");
    }
  return (
   <>
   {todo.map(function(element,index){
            return < div key={element.id}>

            {editId === element.id ?
            <>
            <input type="text" value={editText} onChange={handleInputChange}/>
            <button onClick={()=>handleSave(element.id)}>save</button>
            </>
            :
          
             <>
             <li key={element.id}>{element.title}</li>
            <button onClick={()=>handleEdit(element.id,element.title)}>Edit</button>
            <button onClick={()=>handleDelete(element.id)}>Delete</button>
            </>}
           </div>;
            
        })}
        
   </>
  )
}

export default TodoItem
// for any changes to be happened we should make use of useState() 