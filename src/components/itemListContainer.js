import ItemList from "./ItemList";

const style = {
    margin:'2%',
    width:'50vw'
}

const ListaContendor =()=> {  
  return (
    <div style={style} className='card text-black bg-blue-200 card-compact shadow-xl'>
        <div className="card-body">
            <h2 className="card-title">
               Lista de productos
            </h2>
            <hr/>
            <ItemList />
        </div>        
    </div>
  )
};

export default ListaContendor;