import React, { useState } from 'react'
import { useCartContext } from './context/CartContext';
import { useAppContext } from './context/AppContext';

function BotonContador( { stock, onAdd, id } ) {
    
    const [cuenta,setCount]=useState(0);

	const { addToCart } = useCartContext()
	const { products }  = useAppContext()

    const Addhandler = () =>{
        if(cuenta < stock)  {setCount(cuenta+1);}
    }

    const SubHandler = () =>{
        if(cuenta >0){
        setCount(cuenta-1);}

    }

    const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}

    return (
        <div className='card p-2 bg-sky-600 text-white'>
            <div className='flex items-center justify-center text-black text-xl'>
                    <button className=' bg-rose-300 w-6 rounded-l inline-block' onClick={SubHandler}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <strong className=' btn-square bg-white p-1' > {cuenta} </strong>
                    <button className='bg-emerald-300 w-6 rounded-r inline-block' onClick={Addhandler}>
                        <i className="fas fa-plus"></i>
                    </button>
            </div>
            <hr />
            <div>
                <button className='btn btn-square bg-white text-black' onClick={()=>{ handleClick(id, cuenta)}}>
                    Agregar cantidad al carrito
                </button>
            </div>
        </div>
  )
}

export default BotonContador