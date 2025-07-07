
import {  useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
const [todoInput,setTodoInput]=useState("")
const[todoItems,setTodoItems]=useState([])
const inputRef=useRef(null)

const handleInput=(e)=>{
  setTodoInput(e.target.value)
}
useEffect(()=>{
  inputRef.current.focus()
},[])
const handleClick=()=>{
  setTodoItems([...todoItems,todoInput])
  setTodoInput("")
}
const handleRemove=(removeIndex)=>{
setTodoItems(todoItems.filter((item,index)=>index!==removeIndex))
}
const handleClear=()=>{
  setTodoItems([])
}
  return (
    
    <>
    <div>
       <Navbar   fixed="top" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
        Todo
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  
   
       <div className='app-container'>
       <div className='todo-input'>
       <h1>TODO-APP</h1>
       <input  ref={inputRef} type="text" value={todoInput} onChange={handleInput}/>
<button onClick={handleClick} disabled={!todoInput.trim()} className='add-button'>add</button>

    </div>

<div className='todo-list'>
  {todoItems.length===0?
  <h2>no task added</h2>:
  ( todoItems.map((x,index)=>
  <div  key={index} className='todo-item'>
     <h3>{x}</h3>
      <Button onClick={()=>handleRemove(index)} variant="danger">remove</Button>

  </div>
))
  }
  
</div>
      <Button variant="danger" onClick={handleClear} >clear</Button>

    </div>
    </>
 
  )
}

export default App