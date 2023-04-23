import ItemList from "./ItemList"
import products from '../products'

function ItemListContainer(props) {
    return (
        <div>
            <div>{props.greeting}</div>
            <ItemList category="paletas" products={products.paletas}/>
            <ItemList category="pelotas" products={products.pelotas}/>
        </div>
    )
}

export default ItemListContainer
