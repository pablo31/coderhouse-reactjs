import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=> {
    const [products, setProducts] = useState([])
    const [quantities, setQuantities] = useState({})

    const isOnCart = (product) => {
        return !!quantities[product.id]
    }

    const quantityFor = (product) => {
        return quantities[product.id] || 0
    }

    const addToCart = (newProduct) => {
        setProducts([...products, newProduct])
        let newQuantities = { ...quantities }
        newQuantities[newProduct.id] = 1
        setQuantities(newQuantities)
    }

    const removeFromCart = (product) => {
        let remainingProducts = products.filter((e) => e.id = product.id)
        setProducts(remainingProducts)
        let newQuantities = { ...quantities }
        delete newQuantities[product.id]
        setQuantities(newQuantities)
    }

    const addOneToCart = (product) => {
        let newQuantities = { ...quantities }
        newQuantities[product.id]++
        setQuantities(newQuantities)
        return newQuantities[product.id]
    }

    const removeOneFromCart = (product) => {
        let newQuantities = { ...quantities }
        newQuantities[product.id]--
        setQuantities(newQuantities)
        return newQuantities[product.id]
    }

    const clearCart = () => {
        setQuantities({})
        setProducts([])
    }

    const total = () => {
        let result = 0
        for(const id in quantities) {
            let product = products.find((e) => e.id === k)
            let price = product.price * quantities[id]
            result += price
        }
        return result
    }

    const productsQuantity = () => {
        let result = 0
        for(const id in quantities) {
            result += quantities[id]
        }
        return result
    }

    return (
       <CartContext.Provider value={{
            products, quantities,
            isOnCart, quantityFor,
            addToCart, removeFromCart,
            addOneToCart, removeOneFromCart,
            clearCart,
            total, productsQuantity
       }}>
            {children}
       </CartContext.Provider>
    )
}
