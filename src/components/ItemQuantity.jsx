import { useCartContext } from '../contexts/CartContext'

function ItemQuantity(props) {
    const product = props.product
    const cart = useCartContext()

    const addToCart = () => {
        cart.addToCart(product)
    }

    return (
        <button onClick={addToCart}>
            Agregar al carrito
        </button>
    )
}

export default ItemQuantity
