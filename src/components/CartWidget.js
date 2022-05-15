import carti from './svg/cartIcon.svg' 
import { useCartContext } from './context/CartContext'
import icon from './svg/Trash.svg'
import { useEffect, useState } from 'react'

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
        <div className="dropdown dropdown-end">
        {mia ? (
            <span className='indicator-item  indicator-start badge badge-secondary'>{cart.length}</span>
            ):(<></>)}
            <label tabIndex="0" className="btn btn-accent btn-circle" data-bs-toggle="tooltip" title="Categorias">
                <img src={carti} alt={'carrito'} className="h-5 w-5" ></img>
            </label>
            {mia ? (
                 <ul tabIndex="0" className="menu  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72">
                 {
                     cart.map( cartItem => 
                       <li key={cartItem.id}>
                       <div className='outline outline-2 '> 
                           <img className='h-16 ' src={cartItem.picUrl} alt={cartItem.id}></img>
                           <div>
                           <h2> <b>{cartItem.title}</b></h2>
                           <h2> $<b>{cartItem.price}</b></h2>
                           <p> Cant.{cartItem.quantity}</p>
                           </div>
                           <button  className='btn btn-circle btn-warning justify-center' onClick={()=>{deleteFromCart(cartItem)}}>
                               <img src={icon} alt='eliminar elemento' className='h-5' ></img>
                           </button>
                       </div>
                       </li>
                   )
                 }
               </ul>
            ):(<></>)}
       
    </div>
  </div>
  
  )
}

export default CartWidget