import React from 'react'
import BotonContador from './ItemCount'
import { Link } from 'react-router-dom'

function Item(props) {

  

    return (
        <div  className="card h-fit m-5 card-compact shadow-xl mb-3 bg-white ">
            <figure className='h-60'><img  src={props.pic} alt="Carros" /></figure>
            <div className="card-body">
                <h2 className="card-title" > {props.name} </h2>
                <h3 className="card-title" > <b>{props.pre}$ </b> </h3>
                <h3 > <b>{props.stock} </b> </h3>
                <p>{props.dsc}</p>
                <div>
                    <Link to='' className='btn btn-wide ring bg-emerald-900 ring-slate-800 rign-offset-2'> ver mas  </Link>
                </div>
                <hr/>

                <div className="card-actions">
                    <BotonContador />
                </div>
            </div>
        </div>

    )
}

export default Item