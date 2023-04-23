import Item from './Item'

function ItemList(props) {
    let category = props.category
    let title = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    let items = []
    for(let i = 0; i < props.products.length; i++) {
        let product = props.products[i]
        let id = product[0]
        let name = product[1]
        let src = product[2]
        let price = product[3]
        items.push(
            <div key={id} className="col">
                <Item id={id} category={category} name={name} src={src} price={price}/>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="row">
                {items}
            </div>
        </div>
    )
}

export default ItemList
