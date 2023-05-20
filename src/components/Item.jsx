import { NavLink } from "react-router-dom"
import ItemQuantity from "./ItemQuantity"

function Item(props) {
    let product = props.product

    return (
        <div className="row product">
            <div className="col">
                <NavLink to={`/products/${product.category}/${product.id}`}>
                    <img className="d-block img-thumbnail" src={product.src} alt=""/>
                </NavLink>
            </div>
            <div className="col">
                <NavLink to={`/products/${product.category}/${product.id}`}>
                    <span>{product.name}</span>
                </NavLink>
            </div>
            <div className="col">
                <NavLink to={`/products/${product.category}/${product.id}`}>
                    <span>${product.price}</span>
                </NavLink>
            </div>
            <div className="col">
                <ItemQuantity product={product} />
            </div>
        </div>
    )
}

export default Item
