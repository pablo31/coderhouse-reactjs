import ItemList from "../ItemList"
import { useCartContext } from '../../contexts/CartContext'
import ItemSummary from "./ItemSummary"
import { Link } from 'react-router-dom';

function Brief() {
    const cart = useCartContext()
    const checkoutDetails = cart.getCheckoutDetails()

    let list = []
    for(const field in checkoutDetails) {
        const value = checkoutDetails[field]
        list.push(
            <div key={field} className="row">
                <div className="col">{field}</div>
                <div className="col">{value}</div>
            </div>
        )
    }

    const purchase = () => {
        cart.clearCart()
        Swal.fire(
            'Compra exitosa',
            'Un asesor se contactará para realizar el cobro y envio de los productos',
            'success'
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    Resumen de su compra
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ItemList itemClass={ItemSummary} products={cart.getProducts()} />
                </div>
                <div className="col">
                    {list}
                    <div className="row">
                        <div className="col">
                            <b>Total</b>
                        </div>
                        <div className="col">
                            <b>${cart.total()}</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="/cart/checkout">
                                Editar datos
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/cart" onClick={purchase}>
                                Comprar!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Brief
