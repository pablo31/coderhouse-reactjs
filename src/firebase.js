import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIYlv_wvhsYp5XcogQ-3nuxCIRJZWCFrs",
  authDomain: "coderhouse-mercadito.firebaseapp.com",
  projectId: "coderhouse-mercadito",
  storageBucket: "coderhouse-mercadito.appspot.com",
  messagingSenderId: "492391313114",
  appId: "1:492391313114:web:df2dd0fa1640058be57fe3"
}

const app = initializeApp(firebaseConfig)
export default { firestore: getFirestore(app) }
