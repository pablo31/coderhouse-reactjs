import { NavLink } from "react-router-dom"
import ItemQuantity from "../ItemQuantity"

function ItemSummary(props) {
    let product = props.product

    return (
        <tr className="product small-product">
            <td>
                <NavLink to={`/products/${product.category}/${product.id}`}>
                    <img className="d-block img-thumbnail" src={product.src} alt=""/>
                </NavLink>
            </td>
            <td>
                <NavLink to={`/products/${product.category}/${product.id}`}>
                    <span>{product.name}</span>
                </NavLink>
            </td>
            <td>
                <ItemQuantity product={product} viewOnly="true" />
            </td>
        </tr>
    )
}

export default ItemSummary
