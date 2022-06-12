import { useState } from "react";
import { addOrder } from "./firebase/FirebaseCon";
import { useCartContext } from "./context/CartContext";
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";


function Checkout() {
  const { cart, deleteCart, getFQuantity, getFprice } = useCartContext();

  // quantity of items in cart
  const cantFinal = getFQuantity();

  // successfull purchase modal state
  const [modalState, setmodal] = useState(false);

  //use state to generate OrderID
  const [orderID, setOrderID] = useState("");

  // use state to get Client info
  const [client, setClient] = useState({
    name: "",
    surname: "",
    tlf: "",
    email: "",
    emailConf: "",
  });

  //RegEx formatting
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const tlfRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im;

  //get date of order
  const orderDate = new Date().toLocaleDateString();

  // get Client data
  const formHandler = (e) => {
    setClient({ ...client, [e.target.name]: [e.target.value] });
  };

  //check if name valid
  const nameValid =
    client.name !== undefined && client.name.toString().length > 0;

  //check if name valid
  const surnameValid =
    client.surname !== undefined && client.surname.toString().length > 0;

  //check if tlf valid
  const tlfValid = client.tlf !== undefined && tlfRegex.test(client.tlf);

  const eConfValid = client.emailConf.toString() === client.email.toString();

  //check if tlf valid
  const emailValid =
    client.email !== undefined && emailRegex.test(client.email) && eConfValid;

  //check if all input are valid
  const isValidInput = nameValid && surnameValid && tlfValid && emailValid;

  // generate order
  const orderHandler = () => {
    const order = {
      clientData: {
        name: client.name[0],
        surname: client.surname[0],
        tlf: client.tlf[0],
        email: client.email[0],
      },
      cart: cart,
      total: getFprice(),
      date: orderDate,
    };

    addOrder(order)
      .then((data) => {
        setOrderID(data);
      })
      .then(deleteCart())
      .then(setmodal(true));
  };

  return (
    <>
      <div className="flex items-center h-[90%] gap-1 bg-slate-50 pt-4">
        <div className="container-md flex mx-auto gap-3 w-full md:w-[80%]   rounded p-2 h-full ">
          <div className="container  bg-primary bg-opacity-30 rounded flex flex-col p-2 gap-5 ">
            <h3 className="card-title">Datos de Orden</h3>
            <div className="flex md:grid w-full md:grid-cols-2 gap-3 ">
              <div>
                <label for="name" className="font-semibold text-sm">
                  Nombre
                </label>
                <input
                  className="input input-md rounded input-bordered input-accent w-full  "
                  id="name"
                  type="text"
                  name="name"
                  required
                  onChange={formHandler}
                  placeholder="Nombre"
                />
              </div>
              <div>
                <label for="name" className="font-semibold text-sm">
                  Apellido
                </label>
                <input
                  className="input input-md rounded input-bordered input-accent w-full "
                  id="surname"
                  type="text"
                  name="surname"
                  required
                  onChange={formHandler}
                  placeholder="Apellido"
                />
              </div>
            </div>

            <div>
              <label for="tlf" className="font-semibold text-sm">
                Numero telef&oacute;nico
              </label>
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
              <label for="email" className="font-semibold text-sm">
                Correo Electr&oacute;nico
              </label>
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
              <label for="emailConf" className="font-semibold text-sm">
                confirmar correo electr&oacute;nico
              </label>
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
                  onClick={orderHandler}
                >
                  Procesar Pago
                </button>
              ) : (
                <button
                  className="btn btn-outline btn-disabled btn-block"
                  disabled
                  aria-disabled="true"
                >
                  Procesar Pago
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col md:w-[50%] h-full gap-5">
            <div className="container block bg-warning bg-opacity-50 rounded p-2 h-[50%]">
              <div className="font-semibold text-xl mb-2">Resumen de orden</div>

              <div className="flex justify-between ">
                <div className="font-thin"> Cantidad de items </div>
                <div className="font-thin">{cantFinal}</div>
              </div>

              <div className="divider" />

              <div className="flex justify-between ">
                <div className="font-thin"> Cargo de entrega </div>
                <div className="font-thin">env&iacute;o gratis!</div>
              </div>
              <div className="divider" />

              <div className="flex justify-between ">
                <div className="font-thin"> Total </div>
                <div className="font-thin">{getFprice()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${modalState ? 'flex':'hidden' } card w-full md:w-[80%] md:h-[60vh] h-[90vh] bg-white shadow-xl text-center z-10 fixed md:top-[20vh] top-[10%] md:left-[10%]`}>
      <div className="card-body">
        <h2 className="card-title">Compra Finalizada!!</h2>
        <p><FontAwesomeIcon icon={faFaceSmileBeam} className='text-8xl'></FontAwesomeIcon></p>
        <p>Su compra ha sido procesada correctamente, rebiciras tu pedido dentro 5 a 365 d&iacute;as</p>
        <p>Su numero de control es {orderID} </p>
        <p>Gracias por comprar con nosotros </p>
        <div className="card-actions ">
          <Link to='/' className="btn btn-primary btn-block">Volver a comprar </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Checkout;
