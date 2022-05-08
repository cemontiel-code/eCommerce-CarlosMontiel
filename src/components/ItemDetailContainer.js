import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/itemData"
import ItemDetails from "./ItemDetails";


function ItemDetailContainer() {

  const [ product , setProduct ] = useState({});
  const { id } = useParams();

  useEffect()(()=>{
    if (id === undefined) {
      getItem().then((resp) => setProduct(resp))
		} else {
			getItem().then((resp) => setProduct(resp[id]))
		}} , [id])

    return (
    <div className='container max-h-3.5 max-w-4xl'>
        <ItemDetails Item={product} ></ItemDetails>
    </div>
  )
}

export default ItemDetailContainer