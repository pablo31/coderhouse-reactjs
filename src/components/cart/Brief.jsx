import ItemList from "../ItemList"
import { useCartContext } from '../../contexts/CartContext'
import ItemSummary from "./ItemSummary"

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

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ItemList itemClass={ItemSummary} products={cart.getProducts()} />
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col">
                        </div>
                        <div className="col">
                            Total ${cart.total()}
                        </div>
                    </div>
                </div>
                <div className="col">
                    {list}
                </div>
            </div>
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <button>Comprar!</button>
                </div>
            </div>
        </div>
    )
}
export default Brief
