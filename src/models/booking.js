import FirebaseServices from "../services/Firebase";
import { doc, getDoc, collection, getDocs, query, where, limit, setDoc } from "firebase/firestore";
import Config from "../config/app";

class Booking {

    /**
     * Save booking data
     * @param {*} order_id 
     * @param {*} product_name 
     * @param {*} fullname 
     * @param {*} email 
     * @param {*} phone 
     * @param {*} book_date 
     * @param {*} date 
     * @returns 
     */
    static save(order_id, product_name, fullname, email, phone, book_date, date) {
        return new Promise((resolve, reject) => {
            setDoc(doc(collection(FirebaseServices.firestore(), Config.firestore.booking)), {
                product_name: product_name,
                fullname: fullname,
                email: email,
                phone: phone,
                book_date: book_date,
                date: date,
                order_id: order_id
            }).then((results) => {
                return resolve(results)
            }).catch((error) => {
                return reject(error)
            })
        });   
    }

    /**
     * Get all booking data by key 
     * @param {*} key 
     * @param {*} value 
     * @param {*} queryMode 
     * @returns 
     */
    static findBy(key, value, queryMode = '==') {
        return new Promise((resolve, reject) => {
            const q = query(collection(FirebaseServices.firestore(), Config.firestore.booking), where(key, queryMode, value));
            getDocs(q).then((results) => {
                return resolve(results)
            }).catch((error) => {
                return reject(error)
            })
        })
    }
}

export default Booking;