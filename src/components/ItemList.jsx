import Item from './Item'

function ItemList(props) {
    let items = []
    for(let i = 0; i < props.products.length; i++) {
        let product = props.products[i]
        items.push(
            <div key={product.id} className="col">
                <Item product={product} />
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                {items}
            </div>
        </div>
    )
}

export default ItemList
