import ItemList from "../ItemList"
import Products from '../../products'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Item from '../Item'

function ItemListContainer(props) {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        let fetch = category ? Products.fetchCategory(category) : Products.fetchProducts()
        fetch.then((response) => setProducts(response))
             .finally(() => setIsLoading(false))
    })
    return isLoading ? (
        <div>
            <div>Cargando productos...</div>
        </div>
    ) : (
        <div>
            <ItemList itemClass={Item} products={products}/>
        </div>
    )
}

export default ItemListContainer
