import ItemList from "./ItemList";

const style = {
    margin:'2%',
    width:'95vw'
}

const ListaContendor =()=> {  
  return (
    <div style={style} className='card text-black bg-blue-200 card-compact shadow-xl flex'>
        <div className="card-body">
            <h2 className="card-title">
               Lista de productos
            </h2>
            <hr/>
            <ul className="flex flex-wrap" >
              <ItemList className="m-5 p-5" />
            </ul>
        </div>        
    </div>
  )
};

export default ListaContendor;