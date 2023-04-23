import { NavLink } from "react-router-dom"

function Item(props) {
    return (
        <div className="product">
            <NavLink to={`/products/${props.category}/${props.id}`}>
                <span><p>{props.name}</p> a ${props.price}</span>
                <img className="d-block" src={props.src} alt=""/>
            </NavLink>
        </div>
    )
}

export default Item
