import InputField from "./InputField"
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext'

function Checkout() {
    const cart = useCartContext()

    const updateCheckoutDetail = (field, value) => {
        cart.updateCheckoutDetail(field, value)
    }

    const validate = (event) => {
        let valid = true
        const details = cart.getCheckoutDetails()
        valid = valid && validateField(details, "Nombre")
        valid = valid && validateField(details, "Apellido")
        valid = valid && validateField(details, "Direccion")
        valid = valid && validateField(details, "Provincia")
        valid = valid && validateField(details, "Telefono")
        if(!valid) {
            event.preventDefault()
            Swal.fire(
                'Error',
                'Por favor asegurese de cargar todos los datos antes de avanzar al resumen de la compra',
                'error'
            )
        }
    }

    const validateField = (details, field) => {
        const value = details[field]
        return value && value.length != 0 && value != ""
    }

    return (
        <div className="container">
            <InputField title="Nombre" placeholder="Pablo" type="text" onChange={updateCheckoutDetail} />
            <InputField title="Apellido" placeholder="Fernandez" type="text" onChange={updateCheckoutDetail} />
            <InputField title="Direccion" placeholder="Bacacay 1234" type="text" onChange={updateCheckoutDetail} />
            <InputField title="Provincia" placeholder="Capital Federal" type="text" onChange={updateCheckoutDetail} />
            <InputField title="Telefono" placeholder="1101234567" type="text" onChange={updateCheckoutDetail} />
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <Link className="navbar-brand" to="/cart/checkout/brief" onClick={validate}>
                        Seguir al resumen y comprar {">"}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout
