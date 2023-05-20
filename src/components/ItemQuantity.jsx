import { useCartContext } from '../contexts/CartContext'
import { useState } from 'react'

function ItemQuantity(props) {
    const product = props.product
    const cart = useCartContext()

    const addOneToCart = () => {
        cart.addOneToCart(product)
    }
    const removeOneFromCart = () => {
        cart.removeOneFromCart(product)
    }

    const quantity = cart.quantityFor(product)
    if (props.viewOnly === "true") {
        return (
            <div>
                ${product.price} x {quantity} unidades = <b>${product.price * quantity}</b>
            </div>
        )
    } else if (quantity > 0) {
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
