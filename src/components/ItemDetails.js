import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from './context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const ItemDetails=({Item})=> {

    const { id ,category ,title ,price ,desc ,stock ,picURL } = Item;

    // for breadcrumbs 
    const categoryIdString = `/category/${category}`

    const { addToCart } = useCartContext()
    const [terminar ,  setTerminar ] = useState(false);

    const onAdd = (cuenta)=>{
        addToCart(Item ,cuenta)
        setTerminar(true)
    }


  return (
    <div className="card  lg:card-side rounded-2xl w-11/12 mx-auto h-full shadow-xl bg-primary-content bg-opacity-50 backdrop-blur-lg flex flex-col">
      <Link to='/' className='group btn btn-sm absolute txt-lg z-40'>
        <span className='hidden  group-hover:block  '>volver a homapage</span> <FontAwesomeIcon icon={faAnglesLeft}/> 
      </Link>

      <figure><img className='max-w-[40%] px-2 mb-auto mt-auto rounded-2xl'  src={picURL} alt={`${category}, ${id} `} /></figure>

      <div className="card-body">
        <div className="text-sm breadcrumbs ">
          <ul>
            <li><Link to='/' className='link' >homepage</Link></li> 
            <li><Link to={categoryIdString} className='link' >{category}</Link></li> 
            <li >{title}</li>
          </ul>
        </div>

        <h2 className="card-title">{title}</h2>
        <h4 >Precio : {price}</h4>
        <h5 >disponible : {stock}</h5>
        <br></br>

        <div className="collapse collapse-arrow ">
          <input type="checkbox" /> 
          <div className="collapse-title text-md font-medium rounded-t-xl bg-white bg-opacity-40">
            Descripci&oacute;n del Producto
          </div>
          <div className="collapse-content rounded-b-xl bg-white bg-opacity-60 shadow-inner break-words"> 
            <p>{desc}</p>
          </div>
        </div>
                

        <div className="card-actions justify-center mt-auto">
        {terminar ? (
	  							<Link	to="/cart"	className="btn bg-primary text-white btn-block ">
	  								completar compra
	  							</Link>
	  						) : (
	  							<ItemCount stock={stock} onAdd={onAdd} />
	  						)}
        </div>
      </div>
    
  </div>
  )
}

export default ItemDetails