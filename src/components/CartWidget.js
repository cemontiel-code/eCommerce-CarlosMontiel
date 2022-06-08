import { useCartContext } from './context/CartContext'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFaceFrown ,faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const CartWidget= () => {

    const { cart,deleteFromCart } =useCartContext();

    const [mia ,setMia] = useState();

    useEffect(() => {
        if(cart.length<1){
            setMia(false)
        } else {
            setMia(true);
        }
     }, [cart] )

    

  return (
      <div className='indicator'>
        <div className="dropdown dropdown-end z-50">
                {mia ? (
                    <span className='indicator-item  indicator-start badge'>{cart.length}</span>
                    ):(<></>)}
                <label tabIndex="0" className="btn btn-accent btn-circle" data-bs-toggle="tooltip" title="Categorias">
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </label>
                {mia ? (<>
                 <div tabIndex="0"  className="menu  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72">
                 {
                     cart.map( cartItem => 
                       <li key={cartItem.id} className=''>
                       <div className='flex flex-col md:flex-row justify-between'> 
                            <div className='flex flex-col md:flex-row'>
                                <img className='h-5 md:h-16 ' src={cartItem.picURL} alt={cartItem.id}></img>
                                <div>
                                <h2> <b>{cartItem.title}</b></h2>
                                <h2> $<b>{cartItem.price}</b></h2>
                                <p> Cant.{cartItem.quantity}</p>
                                </div>
                            </div>
                           <button  className='btn btn-circle btn-warning justify-center' onClick={()=>{deleteFromCart(cartItem)}}>
                               <FontAwesomeIcon className='h-5' icon={faTrashAlt}></FontAwesomeIcon>
                           </button>
                       </div>
                       </li>
                   )
                 }
                 <div>
                    <Link	to="/cart"	className="btn bg-primary text-white btn-block ">
                        completar compra
                    </Link>
                 </div>
               </div>
            </>
            ):(<div tabIndex="0" className="menu z-50 dropdown-content t-3 p-2 shadow text-center bg-base-100 h-36 rounded-box w-72">
                    <br />
                    <FontAwesomeIcon className='text-5xl' icon={faFaceFrown} />
                    <br />
                    Carrito vacio
            </div>)}
       
    </div>
  </div>
  
  )
}

export default CartWidget