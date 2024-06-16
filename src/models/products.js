import FirebaseServices from "../services/Firebase";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import Config from "../config/app";

class Products {
    /**
     * List all products
     * @returns 
     */
    static lists() {
        return new Promise((resolve, reject) => {
            const products = collection(FirebaseServices.firestore(), Config.firestore.products);
            getDocs(products).then((results) => {
                return resolve(results)
            }).catch((error) => {
                return reject(error)
            })
        })
    }

    /**
     * Find product by key
     * @param {*} key 
     * @param {*} value 
     * @param {*} queryMode 
     * @returns 
     */
    static findBy(key, value, queryMode = '==') {
        return new Promise((resolve, reject) => {
            const q = query(collection(FirebaseServices.firestore(), Config.firestore.products), where(key, queryMode, value));
            getDocs(q).then((results) => {
                return resolve(results)
            }).catch((error) => {
                return reject(error)
            })
        })
    }
}

export default Products;