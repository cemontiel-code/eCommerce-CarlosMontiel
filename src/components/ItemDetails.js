import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetails=({Item})=> {

    const { id ,cate ,title ,price ,desc ,stock ,picUrl } = Item;;

    const [terminar ,  setTerminar ] = useState(false);

    const onAdd = (cuenta)=>{
        setTerminar(true)
    }


  return (
    <div className="card lg:card-side rounded-2xl w-11/12 mx-auto bg-info shadow-xl">
      <figure><img className='h-full'  src={picUrl} alt={`${cate}, ${id} `} /></figure>
    <div className="card-body">
      <h2 className="card-title">hola {title}</h2>
      <h4 >Precio : {price}</h4>
      <h5 >disponible : {stock}</h5>
      <p>{desc}</p>
      <div className="card-actions md:justify-end">
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