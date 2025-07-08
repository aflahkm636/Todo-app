import { useReducer } from "react"

 function NewComponent(props){
return(
    
    <>
    <h1> {props.data.map((user) => (
          <li key={useReducer.id}>{user.name}</li>
        ))}</h1>
    </>
)
 }
 export default NewComponent