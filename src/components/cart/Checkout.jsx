import InputField from "./InputField"
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext'

function Checkout() {
    const cart = useCartContext()

    const updateCheckoutDetail = (field, value) => {
        cart.updateCheckoutDetail(field, value)
    }

    return (
        <div className="container">
        <InputField title="Nombre" placeholder="Pablo" type="text" onChange={updateCheckoutDetail} />
            <InputField title="Apellido" placeholder="Fernandez" type="text" onChange={updateCheckoutDetail} />
            <InputField title="Direccion" placeholder="Bacacay 1234" type="text" onChange={updateCheckoutDetail} />
            <InputField title="Provincia" placeholder="Capital Federal" type="text" onChange={updateCheckoutDetail} />
            <InputField title="Telefono" placeholder="1101234567" type="telephone" onChange={updateCheckoutDetail} />
            <Link className="navbar-brand" to="/cart/checkout/brief">
                Brief
            </Link>
            TODO Detalle de la compra!! Brief
        </div>
    )
}

export default Checkout
