import { useState } from "react"
import { Link } from "react-router-dom"
import { addOrder } from "./firebase/FirebaseCon"
import { useCartContext } from './context/CartContext'

function Checkout() {

  const {cart ,deleteCart ,getFQuantity ,getSubTotal } = useCartContext();

  //use state to generate OrderID 
  const [orderID ,setOrderID ] = useState('');

  // use state to get Client info
  const [client ,setClient ] = useState({
    name      : '',
    surname   : '',
    tlf       : '',
    email     : '',
    emailConf : ''
  })

  //RegEx formatting 
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const tlfRegex   = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im;

  //get date of order
  const orderDate = new Date().toLocaleDateString()

  // get Client data 
  const formHandler = (e) =>{
    setClient({...client , [e.target.name] : [e.target.value]})
  }

  //check if name valid 
  const nameValid = client.name !== undefined && client.name.toString().length > 0;
  console.log('nameValid',nameValid);
   
  //check if name valid 
  const surnameValid = client.surname !== undefined && client.surname.toString().length > 0;
  console.log('surnameValid',surnameValid);
  
  //check if tlf valid 
  const tlfValid = client.tlf !== undefined  &&  tlfRegex.test(client.tlf);
  console.log('tlfValid',tlfValid);

  const eConfValid = client.emailConf.toString() === client.email.toString();
console.log('eConfValid', eConfValid);
//check if tlf valid 
const emailValid = client.email !== undefined  &&  emailRegex.test(client.email) && eConfValid; 
console.log('emailValid',emailValid);

  //check if all input are valid 
  const isValidInput = nameValid && surnameValid && tlfValid && emailValid ;

  console.log(isValidInput);


  // generate order 
  const orderHandler = () => {
      const order = {
        client,
        items : cart,
        total : getSubTotal(),
        date  : orderDate
      }
      addOrder(order).then(( data ) => {setOrderID(data)})
  }


  return (
    <div className="flex items-center h-[90%]  gap-1 pt-4">
      <div className="container-md flex mx-auto gap-3 w-full md:w-[80%] bg-primary bg-opacity-20  rounded p-2 h-full ">
 
        <form className="container flex flex-col p-2 gap-5 ">
          <h3 className="card-title">Datos de Orden</h3>
          <div className="grid w-full grid-cols-2 gap-3 ">
            <div>
              <input 
                className="input input-md rounded input-bordered input-accent w-full max-w-xs "   
                id="name"   
                type="text"   
                name="name"   
                required
                onChange={formHandler}   
                placeholder="Nombre" 
              />
            </div>
            <div>
              <input 
                className="input input-md rounded input-bordered input-accent w-full max-w-xs" 
                id="surname" 
                type="text" 
                name="surname" 
                required 
                onChange={formHandler} 
                placeholder="Apellido" />

            </div>

          </div>

          <div >
            <input 
               className="input input-md input-bordered input-accent w-full " 
               id="tlf" 
               type="tel" 
               name="tlf" 
               required 
               onChange={formHandler} 
               placeholder="Numero telef&oacute;nico (Colorar codigo de pais)" 
            />
          </div>

          <div>
            <input 
               className="input input-md input-bordered input-accent w-full " 
               id="email" 
               type="email" 
               name="email" 
               required 
               onChange={formHandler} 
               placeholder="Correo Electr&oacute;nico" 
            />
          </div>

          <div>
            <input 
               className="input input-md input-bordered input-accent w-full " 
               id="emailConf" 
               type="email" 
               name="emailConf" 
               required 
               onChange={formHandler} 
               placeholder="Confirmaci&oacute;n de correo electr&oacute;nico" 
            />
          </div>

          <div className="w-full mt-auto ">
            {isValidInput ? (
                <button
                  className="btn btn-info mx-auto btn-block"
                  onClick={()=>{ orderHandler()}}
                  type='submit'
                > Procesar Pago</button>
                ):(
                  <button
                  className="btn btn-outline btn-disabled btn-block"
                    onClick={()=>{ orderHandler()}}
                    disabled
                    aria-disabled="true"
                    type="submit"
                  >
                    Procesar Pago
                    </button>)}
          
          </div>

        </form>
      
      <div className="flex flex-col w-[70%] h-full gap-5">
        <div className="container-sm bg-primary h-[50%]">
          order summary
        </div>
        <div className="container-sm bg-accent  h-[50%]">
          summary cart
        </div>
      </div> 

      </div>
      
    </div>
  )
}

export default Checkout