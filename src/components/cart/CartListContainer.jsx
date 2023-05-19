import ItemList from "../ItemList"
import { useCartContext } from '../../contexts/CartContext'

function CartListContainer() {
    const cart = useCartContext()

    return (
        <div>
            <ItemList products={cart.getProducts()}/>
        </div>
    )
}

export default CartListContainer
