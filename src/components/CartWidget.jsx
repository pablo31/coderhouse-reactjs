import { useCartContext } from '../contexts/CartContext'

function CartWidget(props) {
    const cart = useCartContext()

    return (
        <span className="cart">
            <i className="bi bi-cart4"></i>
            <span className="badge badge-secondary badge-danger">{ cart.productsQuantity() }</span>
        </span>
    )
}

export default CartWidget
