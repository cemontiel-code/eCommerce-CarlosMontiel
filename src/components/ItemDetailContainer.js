import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetails from './ItemDetails'
import { useAppContext } from './context/AppContext';

function ItemDetailContainer() {

  const [ item , setItem ] = useState({});
  const { id } = useParams();
  const { products } = useAppContext()

  useEffect(() => {
    
    const findItem = products.find(  (producto) => producto.id === id )
    if (findItem !== undefined) { setItem(findItem) }
    if (findItem === undefined) { console.log('%c eRR = archivo no encontrado','background-color:black; color: red') }
    
		//if (id === undefined) {
		//	getItem().then((resp) => setProduct(resp))
		//} else {
		//	getItem().then((resp) => {setProduct(resp[id])
    //  })
		//}
	}, [id,products])
    return (
    <div className='py-10 w-screen bg-slate-500 '>
        <ItemDetails Item={item} ></ItemDetails>
    </div>
  )
}

export default ItemDetailContainer