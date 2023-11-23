import { useEffect, useState } from "react"

const CustomHookComponent = (api) => {
const todo=api.data
  console.log("todo",todo)
 return(
   <div>
    {todo.map((item,key)=>(
      <>
        <div>
            <p  key={key}>{item.title}</p>
        </div>
      </>
    ))}
   </div>
 )   
}

export default CustomHookComponent