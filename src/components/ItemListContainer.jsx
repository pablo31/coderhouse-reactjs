import ItemList from "./ItemList"

function ItemListContainer(props) {
    let paletas = [
        ["Wilson", "src/assets/paletas/wilson-1.jpeg", 52000],
        ["Head", "src/assets/paletas/head-1.jpeg", 43500],
        ["Babolat", "src/assets/paletas/babolat-1.jpeg", 52300],
        ["Royal", "src/assets/paletas/royal-1.jpeg", 44000]
    ]
    let pelotas = [
        ["Penn", "src/assets/pelotas/penn-1.jpeg", 2900],
        ["Head", "src/assets/pelotas/head-1.jpeg", 3500],
        ["Bullpadel", "src/assets/pelotas/bullpadel-1.jpeg", 4000]
    ]
    return (
        <div>
            <div>{props.greeting}</div>
            <ItemList category= "Paletas" products={paletas}/>
            <ItemList category= "Pelotas" products={pelotas}/>
        </div>
    )
}

export default ItemListContainer
