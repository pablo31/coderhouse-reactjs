import { useCartContext } from '../contexts/CartContext'
import { useState } from 'react'

function ItemQuantity(props) {
    const product = props.product
    const cart = useCartContext()

    const addOneToCart = () => {
        cart.addOneToCart(product)
    }
    const removeOneFromCart = () => {
        if (quantity == 1) {
            Swal.fire({
                title: "Seguro que desea quitar el producto del carrito?",
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: "Si, quitar",
                cancelButtonText: "Cancelar"
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    cart.removeOneFromCart(product)
                }
              })
        } else {
            cart.removeOneFromCart(product)
        }
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
                <button className="btn btn-success" onClick={addOneToCart}>
                    +
                </button>
                <span className="quantity">{ quantity }</span>
                <button className="btn btn-danger" onClick={removeOneFromCart}>
                    -
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <button className="btn btn-primary" onClick={addOneToCart}>
                    Agregar al carrito
                </button>
            </div>
        )
    }
}

export default ItemQuantity
