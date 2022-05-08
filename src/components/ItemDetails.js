import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  BotonContador from './ItemCount' 

const ItemDetails=({Item})=> {

    const { id ,cate ,title ,price ,desc ,stock ,picUrl } = Item;;

    const [Terminar ,  setTerminar ] = useState();

    const onAdd = ()=>{
        setTerminar(true);
        alert('agregado al carrito')
    }


  return (
    <div className="card lg:card-side bg-slate-200 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <h4 className="card-title">{price}</h4>
      <h5 className="card-title">{stock}</h5>
      <p>{desc}</p>
      <div className="card-actions justify-end">
        <BotonContador/>
      </div>
    </div>
    <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
  </div>
  )
}

export default ItemDetails