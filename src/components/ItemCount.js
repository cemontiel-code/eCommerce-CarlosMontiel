import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd , id }) => {
	const [count, setCount] = useState(1)

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

	const handleClick = (cantidad) => {
		onAdd(cantidad)
	}

	return (
        <div className='card p-2 bg-base text-white'>
            <div className='btn-group'>
                    <button className='btn btn-error text-black w-3/12    rounded-l-full text-xl' onClick={handleRemove}>
                         <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </button>
                    <strong className='btn no-animation text-black hover:bg-white  w-6/12  text-center bg-white p-1' > {count} </strong>
                    <button className='btn btn-success text-black w-3/12  rounded-r-full text-xl ' onClick={handleAdd}>
					<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </button>
            </div>
			<div className='divider'></div>
            <div className='flex justify-center'>
                <button className='btn btn-square rounded-xl w-11/12' onClick={ ()=>{handleClick(count)} }>
                    Agregar cantidad al carrito
                </button>
            </div>
            <br />
        </div>)
}

export default ItemCount
