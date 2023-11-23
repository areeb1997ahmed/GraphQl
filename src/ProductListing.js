import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import {fetchProducts } from './Components/redux/actions/productActions'
import {useQuery,gql} from '@apollo/client'
const ProductListing = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // setIsMenuOpen(!isMenuOpen);
    // console.log("isMenuOpen", isMenuOpen)
  };
  
 
 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts() )

  }, [])

  
const FETCH_PRODUCT = gql`
{
  launchesPast(limit: 10) {
    id
    mission_name
  }
}
`;

// const FETCH_PRODUCT = gql`
//   query FETCH_PRODUCT {
//     products {
//       id
//       title
//       price
//       description
//       category
//       image
//       rating {
//         rate
//         count
//       }
//   }
// }
// `;
const { data, loading, error } = useQuery(FETCH_PRODUCT);

if (loading) return "Loading...";
if (error) return <pre>{error.message}</pre>
  
  return (
    <div className='bg-stone-500'>
      <ProductComponent />
     
    </div>
  )
}
export default ProductListing



