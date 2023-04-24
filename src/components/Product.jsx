import { useParams } from "react-router-dom"
import Mocks from '../mocks'
import { useState, useEffect } from 'react'

function Product(props) {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        Mocks.fetchProduct(id)
             .then((response) => setProduct(response))
             .finally(() => setIsLoading(false))
    })
    return isLoading ? (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>Cargando producto...</div>
                </div>
            </div>
        </div>
    ) : (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{product.name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="d-block" src={product.src} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>${product.price}</span>
                </div>
            </div>
        </div>
    )
}

export default Product