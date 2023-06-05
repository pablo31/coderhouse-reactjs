import ItemList from "../ItemList"
import Item from "../Item"
import { useCartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom';

function CartListContainer() {
    const cart = useCartContext()

    const clearCart = () => {
        Swal.fire({
            title: "Seguro que desea vaciar el carrito?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Si, vaciar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                cart.clearCart()
            }
        })
    }

    if (cart.productsQuantity() > 0) {
        return (
            <div>
                <Link className="btn btn-primary wizard-continue" to="/cart/checkout">
                    Seguir al checkout {">"}
                </Link>
                <ItemList itemClass={Item} products={cart.getProducts()}/>
                <a className="btn btn-danger" onClick={clearCart}>
                    Vaciar carrito
                </a>
                <Link className="btn btn-primary wizard-continue" to="/cart/checkout">
                    Seguir al checkout {">"}
                </Link>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        Su carrito está vacío
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/">
                            Volver al catálogo
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartListContainer
