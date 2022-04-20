
//import shoppingCart from '../shoppingCart.svg'
const style = {
    margin:'2%'
}

const ListaContendor =({children})=> {  
  return (
    <div style={style} className='overflow-x-auto'>
        <table className="table table-fixed w-full">
            <thead>
                <tr> <th> itemListContainer </th> </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>        
    </div>
  )
};

export default ListaContendor;