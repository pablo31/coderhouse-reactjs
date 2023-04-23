import { useParams } from "react-router-dom"
import products from '../products.jsx'

function Product(props) {
    const { category, id } = useParams()
    let product = products[category].find((e) => e[0] == id)
    let name = product[1]
    let src = product[2]
    let price = product[3]
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="d-block" src={src} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>${price}</span>
                </div>
            </div>
        </div>
    )
}

export default Product