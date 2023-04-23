import Item from './Item'

function ItemList(props) {
    let items = []
    for(let i = 0; i < props.products.length; i++) {
        let products = props.products[i]
        let name = products[0]
        let src = products[1]
        let price = products[2]
        items.push(
            <div className="col">
                <Item category={props.category} name={name} src={src} price={price}/>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{props.category}</h1>
                </div>
            </div>
            <div className="row">
                {items}
            </div>
        </div>
    )
}

export default ItemList
