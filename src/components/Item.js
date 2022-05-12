import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product})=> {
    return (
        <div  className="card h-fit m-5 card-compact shadow-xl mb-3 bg-white ">
            <figure ><img   src={product.picUrl} alt="Carros" /></figure>
            <div className="card-body">
                <h2 className="card-title" > {product.title} </h2>
                <h3 className="card-title" > <b>{product.price}$ </b> </h3>
                <h3 > <b>{product.stock} </b> </h3>
                <p>{product.desc}</p>
                <hr/>
                <div className="card-actions" >
                    <Link to={`/item/${product.id-1}`} className='btn w-full text-white ring  bg-emerald-900 ring-slate-800 rign-offset-2' >
                        ver mas 
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Item