import { useCartContext } from '../contexts/CartContext'
import { useState } from 'react'

function ItemQuantity(props) {
    const product = props.product
    const cart = useCartContext()

    const [wasInTheCart, setWasInTheCart] = useState(false)

    const addOneToCart = () => {
        cart.addOneToCart(product)
    }
    const removeOneFromCart = () => {
        cart.removeOneFromCart(product)
    }

    const quantity = cart.quantityFor(product)
    if (quantity > 0) {
        return (
            <div>
                <button onClick={removeOneFromCart}>
                    -
                </button>
                <span>{ quantity }</span>
                <button onClick={addOneToCart}>
                    +
                </button>
            </div>
        )
    } else if(wasInTheCart) {
        return (
            <div>
                <button onClick={addOneToCart}>
                    Volver a agregar al carrito
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={addOneToCart}>
                    Agregar al carrito
                </button>
            </div>
        )
    }
}

export default ItemQuantity
