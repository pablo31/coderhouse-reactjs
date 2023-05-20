function ItemList(props) {
    let items = []
    for(let i = 0; i < props.products.length; i++) {
        let product = props.products[i]
        items.push(
            <props.itemClass key={product.id} product={product} />
        )
    }
    return (
        <div className="container">
            {items}
        </div>
    )
}

export default ItemList
