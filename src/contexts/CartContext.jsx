import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=> {
    const [products, setProducts] = useState([])
    const [quantities, setQuantities] = useState({})
    const [checkoutDetails, setCheckoutDetails] = useState({})

    const isOnCart = (product) => {
        return !!quantities[product.id]
    }

    const quantityFor = (product) => {
        return quantities[product.id] || 0
    }

    const removeOneFromCart = (product) => {
        if(quantityFor(product) == 1) {
            let remainingProducts = products.filter((e) => e.id != product.id)
            setProducts(remainingProducts)
            let newQuantities = { ...quantities }
            delete newQuantities[product.id]
            setQuantities(newQuantities)
            return 0
        } else {
            let newQuantities = { ...quantities }
            newQuantities[product.id]--
            setQuantities(newQuantities)
            return newQuantities[product.id]
        }
    }

    const addOneToCart = (product) => {
        if(quantityFor(product) > 0) {
            let newQuantities = { ...quantities }
            newQuantities[product.id]++
            setQuantities(newQuantities)
            return newQuantities[product.id]
        } else {
            setProducts([...products, product])
            let newQuantities = { ...quantities }
            newQuantities[product.id] = 1
            setQuantities(newQuantities)
            return 1
        }
    }

    const clearCart = () => {
        setQuantities({})
        setProducts([])
    }

    const total = () => {
        let result = 0
        for(const id in quantities) {
            let product = products.find((e) => e.id == id)
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

    const getProducts = () => {
        return products
    }

    const updateCheckoutDetail = (field, value) => {
        let newDetails = { ...checkoutDetails }
        newDetails[field] = value.trim()
        setCheckoutDetails(newDetails)
        return field
    }

    const getCheckoutDetails = () => {
        return checkoutDetails
    }

    const getCheckoutDetail = (field) => {
        return checkoutDetails[field]
    }

    return (
       <CartContext.Provider value={{
            products, quantities,
            isOnCart, quantityFor,
            addOneToCart, removeOneFromCart,
            getProducts, clearCart,
            total, productsQuantity,
            updateCheckoutDetail, getCheckoutDetails,
            getCheckoutDetail
       }}>
            {children}
       </CartContext.Provider>
    )
}
