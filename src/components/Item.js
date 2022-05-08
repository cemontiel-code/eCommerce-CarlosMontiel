import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product})=> {
    return (
        <div  className="card h-fit m-5 card-compact shadow-xl mb-3 bg-white ">
            <figure className='h-60'><img  src={product.pic} alt="Carros" /></figure>
            <div className="card-body">
                <h2 className="card-title" > {product.name} </h2>
                <h3 className="card-title" > <b>{product.pre}$ </b> </h3>
                <h3 > <b>{product.stock} </b> </h3>
                <p>{product.dsc}</p>
                <hr/>
                <div className="card-actions" >
                    <Link to={`/item/${product.id}`} className='btn btn-wide ring bg-emerald-900 ring-slate-800 rign-offset-2' >
                        ver mas 
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Item