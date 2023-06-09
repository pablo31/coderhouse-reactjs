import { collection, doc, getDoc, getDocs, query, where, addDoc } from 'firebase/firestore'
import firebase from './firebase'

const dbFirestore = firebase.firestore
const productsCollection = collection(dbFirestore, 'products')
const ordersCollection = collection(dbFirestore, 'orders')

export default {
    fetchProducts: () => {
        return getDocs(productsCollection).then((response) => response.docs.map((product) => ({ id: product.id, ...product.data() })))
    },
    fetchCategory: (category) => {
        const q = query(
            productsCollection,
            where('category','==', category)
        )
        return getDocs(q).then((response) => response.docs.map((product) => ({ id: product.id, ...product.data() })))
    },
    fetchProduct: (id) => {
        const queryDoc = doc(dbFirestore, 'products', id)
        return getDoc(queryDoc).then((product) => ({ id: product.id, ...product.data() }))
    },
    putOrder: (quantities, checkoutDetails, total) => {
        const order = { buyer: checkoutDetails, products: quantities, total: total }
        return addDoc(ordersCollection, order)
    }
}
