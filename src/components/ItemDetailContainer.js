import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/itemData"
import ItemDetails from './ItemDetails'
import {getFirestore, doc, getDoc  } from 'firebase/firestore'

function ItemDetailContainer() {

  
  
  const [ product , setProduct ] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    

		if (id === undefined) {
			getItem().then((resp) => setProduct(resp))
		} else {
			getItem().then((resp) => {setProduct(resp[id])
      })
		}
	}, [id])
    return (
    <div className='py-10 w-screen  bg-gray-300 '>
        <ItemDetails Item={product} ></ItemDetails>
    </div>
  )
}

export default ItemDetailContainer