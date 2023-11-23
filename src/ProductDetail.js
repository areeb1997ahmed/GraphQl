import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { selectedProduct } from './Components/redux/actions/productActions'

const ProductDetail = () => {
  const selector = useSelector(state => state.product111)
  console.log('selector',selector)
  const dispatch = useDispatch()
  const { productId } = useParams();

  

  useEffect(() => {

    if (productId && productId !== "") {  
      dispatch(selectedProduct(productId))
      console.log(productId)
   
    }

  },[productId])
  
  return (
    <div>
    <h1>hello</h1>
     <div key={selector.id}>
     <h1>{selector.title}</h1>
      <p>{selector.description}</p>
     </div>
  
    
    </div>
  )
}

export default ProductDetail