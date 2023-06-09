// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIYlv_wvhsYp5XcogQ-3nuxCIRJZWCFrs",
  authDomain: "coderhouse-mercadito.firebaseapp.com",
  projectId: "coderhouse-mercadito",
  storageBucket: "coderhouse-mercadito.appspot.com",
  messagingSenderId: "492391313114",
  appId: "1:492391313114:web:df2dd0fa1640058be57fe3"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default { firestore: getFirestore(app) }
