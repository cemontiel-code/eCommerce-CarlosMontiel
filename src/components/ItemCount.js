import React, { useState } from 'react'
import { useCartContext } from './context/CartContext';
import { useAppContext } from './context/AppContext';

const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(0)

	const { addToCart } = useCartContext()
	const { products } = useAppContext()

	console.log(products);

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const handleClick = (id, cantidad) => {
		console.log('saf',products)
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}

	return (
        <div className='card p-2 w-2/4 bg-sky-600 text-white'>
            <div className='btn-group'>
                    <button className='btn btn-error text-black w-3/12  bg-rose-400  rounded-r text-4xl' onClick={handleRemove}>
                         -
                    </button>
                    <strong className='btn btn-ghost text-black rounded-l rounded-r w-6/12 h-3/4 text-center bg-white p-1' > {count} </strong>
                    <button className='btn btn-info text-black w-3/12 bg-emerald-500  rounded-l text-4xl ' onClick={handleAdd}>
                        +
                    </button>
            </div>
            <hr />
            <br />
            <div className='flex justify-center'>
                <button className='btn btn-square w-11/12 bg-white text-black' onClick={ ()=>{handleClick(id, count)} }>
                    Agregar cantidad al carrito
                </button>
            </div>
            <br />
        </div>)
}

export default ItemCount
