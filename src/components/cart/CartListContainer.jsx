import ItemList from "../ItemList"
import Item from "../Item"
import { useCartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom';

function CartListContainer() {
    const cart = useCartContext()

    return (
        <div>
            <ItemList itemClass={Item} products={cart.getProducts()}/>
            <Link className="navbar-brand" to="/cart/checkout">
                Checkout
            </Link>
        </div>
    )
}

export default CartListContainer
