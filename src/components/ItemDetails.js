import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetails=({Item})=> {

    const { id ,cate ,title ,price ,desc ,stock ,picUrl } = Item;;

    const [terminar ,  setTerminar ] = useState(false);

    const onAdd = (cuenta)=>{
        setTerminar(true)
        console.log(cuenta)
    }


  return (
    <div className="card h-full lg:card-side bg-slate-200 shadow-xl">
      <figure><img src={picUrl} alt={`${cate}, ${id} `} /></figure>
    <div className="card-body">
      <h2 className="card-title">hola {title}</h2>
      <h4 >Precio : {price}</h4>
      <h5 >disponible : {stock}</h5>
      <p>{desc}</p>
      <div className="card-actions justify-end">
      {terminar ? (
								<Link
									to="/cart"
									className="btn bg-primary text-white btn-block "
								>
									completar compra
								</Link>
							) : (
								<ItemCount stock={stock} onAdd={onAdd} id={id} />
							)}
      </div>
    </div>
    
  </div>
  )
}

export default ItemDetails