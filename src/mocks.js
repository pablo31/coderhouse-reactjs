let products = [
    { id: 1, category: "Paletas", name: "Paleta Wilson", src: "/src/assets/paletas/wilson-1.jpeg", price: 52000 },
    { id: 2, category: "Paletas", name: "Paleta Head", src: "/src/assets/paletas/head-1.jpeg", price: 43500 },
    { id: 3, category: "Paletas", name: "Paleta Babolat", src: "/src/assets/paletas/babolat-1.jpeg", price: 52300 },
    { id: 4, category: "Paletas", name: "Paleta Royal", src: "/src/assets/paletas/royal-1.jpeg", price: 44000 },
    { id: 5, category: "Pelotas", name: "Pelotitas Penn", src: "/src/assets/pelotas/penn-1.jpeg", price: 2900 },
    { id: 6, category: "Pelotas", name: "Pelotitas Head", src: "/src/assets/pelotas/head-1.jpeg", price: 3500 },
    { id: 7, category: "Pelotas", name: "Pelotitas Bullpadel", src: "/src/assets/pelotas/bullpadel-1.jpeg", price: 4000 }
]

export default {
    fetchProducts: () => {
        return new Promise((completed, failed) => {
            setTimeout(() => completed(products), 1000)
        })
    },
    fetchCategory: (category) => {
        return new Promise((completed, failed) => {
            let response = products.filter((e) => e.category == category)
            setTimeout(() => completed(response), 1000)
        })
    },
    fetchProduct: (id) => {
        return new Promise((completed, failed) => {
            let product = products.find((e) => e.id == id)
            setTimeout(() => completed(product), 1000)
        })
    }
}
