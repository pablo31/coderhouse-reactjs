function Item(props) {
    return (
        <div className="product">
            <span><p>{props.name}</p> a ${props.price}</span>
            <img className="d-block" src={props.src} alt=""/>
        </div>
    )
}

export default Item
