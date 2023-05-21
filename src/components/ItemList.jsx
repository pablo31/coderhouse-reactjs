function ItemList(props) {
    let items = []
    for(let i = 0; i < props.products.length; i++) {
        let product = props.products[i]
        items.push(
            <props.itemClass key={product.id} product={product} />
        )
    }
    return (
        <table className="table table-bordered">
            <tbody>
                {items}
            </tbody>
        </table>
    )
}

export default ItemList
