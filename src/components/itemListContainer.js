import BotonContador from "./ItemCount";

const style = {
    margin:'2%',
    width:'50vw'
}

const ListaContendor =(props)=> {  
  return (
    <div style={style} className='card bg-blue-200 card-compact shadow-xl'>
        <div className="card-body">
            <h2 className="card-title">
               Lista de productos
            </h2>
            <hr/>

            <div className="card card-compact shadow-xl bg-white ">
                <figure><img style={style} width='175px' src='https://api.lorem.space/image/car?0' alt="Carros" /></figure>
                <div className="card-body">
                    <h2 className="card-title" > vehiculo #1 </h2>
                    <p>{props.carac}</p>

                    <div className="card-actions justify-end">
                        <BotonContador />
                    </div>

                </div>
            </div>

            <hr/>
            
            <div className="card card-compact shadow-xl bg-white ">
                <figure><img style={style} width='175px' src='https://api.lorem.space/image/car?1' alt="Carros" /></figure>
                <div className="card-body">
                    <h2 className="card-title" > vehiculo #2 </h2>
                    <p>{props.carac}</p>

                    <div className="card-actions justify-end">
                        <BotonContador />
                    </div>

                </div>
            </div>

            <hr/>
            
            
            <div className="card card-compact shadow-xl bg-white ">
                <figure><img style={style} width='175px' src='https://api.lorem.space/image/car?2' alt="Carros" /></figure>
                <div className="card-body">
                    <h2 className="card-title" > vehiculo #3 </h2>
                    <p>{props.carac}</p>

                    <div className="card-actions justify-end">
                        <BotonContador />
                    </div>

                </div>
            </div>

            <hr/>
            
        </div>        
    </div>
  )
};

export default ListaContendor;