import { NavLink } from "react-router-dom"

function Item(props) {
    let product = props.product
    return (
        <div className="product">
            <NavLink to={`/products/${product.category}/${product.id}`}>
                <span><p>{product.name}</p> a ${product.price}</span>
                <img className="d-block img-thumbnail" src={product.src} alt=""/>
            </NavLink>
        </div>
    )
}

export default Item
