import ItemList from "../ItemList"
import { useCartContext } from '../../contexts/CartContext'
import ItemSummary from "./ItemSummary"
import { Link } from 'react-router-dom';

function Brief() {
    const cart = useCartContext()
    const checkoutDetails = cart.getCheckoutDetails()

    let list = []
    for(const field in checkoutDetails) {
        const value = checkoutDetails[field]
        list.push(
            <tr key={field}>
                <td>{field}</td>
                <td>{value}</td>
            </tr>
        )
    }

    const purchase = (e) => {
        console.log("hola!")
        e.preventDefault()
        return
        cart.purchase().then((response) => {
            const orderId = response.id
            Swal.fire(
                'Compra exitosa',
                'Su número de orden es ' + orderId + '\n' +
                'Un asesor se contactará para realizar el cobro y envio de los productos',
                'success'
            )
        })
    }

    return (
        <div className="container brief">
            <div className="row">
                <div className="col">
                    Resumen de su compra
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ItemList itemClass={ItemSummary} products={cart.getProducts()} />
                </div>
                <div className="col">
                    <table className="table table-bordered">
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col">
                            <b>Total</b>
                        </div>
                        <div className="col">
                            <b>${cart.total()}</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link className="btn btn-danger" to="/cart/checkout">
                                Editar datos
                            </Link>
                        </div>
                        <div className="col">
                            <a className="btn btn-success" onClick={purchase}>
                                Comprar!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Brief
