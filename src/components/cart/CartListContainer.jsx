import ItemList from "../ItemList"
import Item from "../Item"
import { useCartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom';

function CartListContainer() {
    const cart = useCartContext()

    if (cart.productsQuantity() > 0) {
        return (
            <div>
                <ItemList itemClass={Item} products={cart.getProducts()}/>
                <Link className="navbar-brand" to="/cart/checkout">
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
                        <Link className="navbar-brand" to="/">
                            Volver al catálogo
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartListContainer
