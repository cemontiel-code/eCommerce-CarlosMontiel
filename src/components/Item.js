import React from 'react'
import BotonContador from './ItemCount'

function Item(props) {

    return (
        <div className="card card-compact shadow-xl mb-3 bg-white ">
            <figure><img  src={props.pic} alt="Carros" /></figure>
            <div className="card-body">
                <h2 className="card-title" > {props.name} </h2>
                <h3 className="card-title" > <b>{props.pre}$ </b> </h3>
                <p>{props.dsc}</p>
                <div>
                    <button className='btn btn-wide ring bg-emerald-900 ring-slate-800 rign-offset-2'> descripcion </button>
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