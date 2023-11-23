import React, {useReducer,useState,useEffect } from 'react';
import CustomHookComponent from '../CustomHookComponent'
function FixedRenderIssueComponent() {
  const [data, setdata] = useState({
    firstName:'',
    lastName:''
  })
  const [api, setapi] = useState([])
  useEffect(()=>{
    const api=async()=>{
      const api= await fetch("https://jsonplaceholder.typicode.com/todos")
      if(api.ok){
        const data = await api.json();
        setapi(data);
        console.log(api)
      }
    }
    api()
  },[])
 const handleInput=(e)=>{
  setdata({
    ...data,
    [e.target.name]:e.target.value
  })
 }
 const fullName = `${data.firstName} ${data.lastName}`;
  return (
  <div>
  <form>
    <input type='text' name='firstName' onChange={handleInput}/>
    <input type='text' name='lastName' onChange={handleInput}/>
    <input value={fullName}/>
  </form>
  
  <br />
    <p>{data.firstName}</p>
    <p>{data.lastName}</p>
    <CustomHookComponent data={api}/>
  </div>
 
  );
}
export default FixedRenderIssueComponent;
