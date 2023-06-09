import { collection, doc, getDoc, getDocs, query, where, addDoc } from 'firebase/firestore'
import firebase from './firebase'

// let products = [
//     { id: 5, category: "Pelotas", name: "Pelotitas Penn", src: "/src/assets/pelotas/penn-1.jpeg", price: 2900 },
//     { id: 6, category: "Pelotas", name: "Pelotitas Head", src: "/src/assets/pelotas/head-1.jpeg", price: 3500 },
//     { id: 7, category: "Pelotas", name: "Pelotitas Bullpadel", src: "/src/assets/pelotas/bullpadel-1.jpeg", price: 4000 },
//     { id: 1, category: "Paletas", name: "Paleta Wilson", src: "/src/assets/paletas/wilson-1.jpeg", price: 52000 },
//     { id: 2, category: "Paletas", name: "Paleta Head", src: "/src/assets/paletas/head-1.jpeg", price: 43500 },
//     { id: 3, category: "Paletas", name: "Paleta Babolat", src: "/src/assets/paletas/babolat-1.jpeg", price: 52300 },
//     { id: 4, category: "Paletas", name: "Paleta Royal", src: "/src/assets/paletas/royal-1.jpeg", price: 44000 },
//     { id: 8, category: "Accesorios", name: "Muñequera Babolat", src: "/src/assets/accesorios/munequera-1.jpeg", price: 7000 }
// ]

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
    putOrder: (quantities, checkoutDetails) => {
        const order = { buyer: checkoutDetails, products: quantities }
        return addDoc(ordersCollection, order)
    }
}
