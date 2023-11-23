import React from 'react'
import {useSelector} from 'react-redux'
const Counter = () => {
    const selector= useSelector(state => state)
    console.log("Selector",selector)
  return (
    <div>
   <p>{selector}</p> 
  <p>{selector}</p>
    </div>
    
  )
}

export default Counter