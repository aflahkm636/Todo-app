import { useEffect, useState } from "react"
import NewComponent from "./component2"

function  FetchComponent(){
    const [items,setItem]=useState([])
    useEffect(()=>{
        
                async function FetchApi() {
          const res=  await  fetch("https://jsonplaceholder.typicode.com/users")
            const data= await res.json()
            
           setItem(data)
            
        }
        FetchApi()
        
    },[])
        console.log(items);
        
      
return(
   <NewComponent data={items}/>
)

}

 

export default FetchComponent