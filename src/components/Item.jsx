import { NavLink } from "react-router-dom"
import ItemQuantity from "./ItemQuantity"

function Item(props) {
    let product = props.product

    return (
        <tr className="product">
            <td>
                <NavLink to={`/products/${product.category}/${product.id}`}>
                    <img className="d-block img-thumbnail" src={product.src} alt=""/>
                </NavLink>
            </td>
            <td>
                <div className="containter">
                    <div className="row">
                        <div className="col">
                            <NavLink to={`/products/${product.category}/${product.id}`}>
                                <span>{product.name}</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis similique provident illo distinctio possimus inventore eligendi quis neque minus illum deserunt reprehenderit, eum itaque iste pariatur quae nulla quidem.</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="pricing">
                <div className="row">
                    <div className="col">
                        <NavLink to={`/products/${product.category}/${product.id}`}>
                            <span>${product.price}</span>
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ItemQuantity product={product} />
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default Item
