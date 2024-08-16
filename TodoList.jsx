import React, { useState } from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {
 const[text,setText]= useState(" ");

 const [todo,setTodo]=useState([])


 const handleChange=(event)=>{
  //console.log(event.target.value)
  setText(event.target.value) // when the function is called it willl update the text="event.target.value"
 }
 const handleSubmit=()=>{
  let newItem={
    title:text,
    id:new Date().toDateString()+text
  }
  setTodo([...todo,newItem]);//new text will be added to todo array
  setText("") // used for empty input field
 }

 const handleDelete=(id)=>{
  //console.log(id);
  const todoAfterDeletion=todo.filter(function(element,index){
    return element.id!==id;// we are filtering the array or removing the matched id remaining will be same 
  })
  setTodo(todoAfterDeletion)
 }

const handleEditTodo=(id,newText)=>{
  let updatedTodo=todo.map((element)=>{
    if(element.id==id){
      return{...element,title:newText} // this is updating the title to latest value 
    }
    return element;
  });
  setTodo(updatedTodo);
 }
  return (
    <div>
        <input type="text"value={text} onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>
        <ol>
          {
          }
          <TodoItem todo={todo} handleDelete={handleDelete} 
          handleEditTodo={handleEditTodo}/>
        </ol>
    </div>
  )
}

export default TodoList