import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product})=> {
    return (
        <div  className="card h-full card-compact shadow-xl bg-primary bg-opacity-30 backdrop-blur-xl ">
            <figure ><img className='aspect-sqare'  src={product.picURL} alt="Carros" /></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title" > {product.title} </h2>
                    <h3 className="card-title" > <b>{product.price}$ </b> </h3>
                    <h3 >inventario: <b>{product.stock} </b> </h3>
                </div>

                <div className='card-actions  mt-auto' >
                    <Link to={`/item/${product.id}`} className='btn glass bg-accent w-full text-white' >
                        ver mas 
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Item