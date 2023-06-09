import { useParams } from "react-router-dom"
import Products from '../../products'
import { useState, useEffect } from 'react'
import ItemQuantity from '../ItemQuantity'

function Product(props) {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        Products.fetchProduct(id)
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
                    <img className="d-block" src={"/src/assets/" + product.pic} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis similique provident illo distinctio possimus inventore eligendi quis neque minus illum deserunt reprehenderit, eum itaque iste pariatur quae nulla quidem.</span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>${product.price}</span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ItemQuantity product={product} />
                </div>
            </div>
        </div>
    )
}

export default Product