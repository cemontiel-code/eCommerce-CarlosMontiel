import React from 'react'

const style = {
    width:'150px'
}


const ItemContainer = (props) => {
  return (
    <tr>
        <td> <figure><img style={style} src='https://api.lorem.space/image/car?0' alt="Carros" /></figure></td>
        <td className='p-0'>
            <h2 className="card-title">{props.tittle}</h2>
            <hr />
                <br />

            <div className='flex space-x-3.5'>
                <p className='justify-start'>{props.descrip}</p>
                <br />
                <button className="btn btn-primary justify-end">Comprar</button>
            </div>
            
            
          </td>
    </tr>
  )
}

export default ItemContainer;