import FirebaseServices from "../services/Firebase";
import { doc, getDoc, collection, getDocs, query, where, limit, setDoc } from "firebase/firestore";
import Config from "../config/app";
import Moment from "moment";

class Testimonial {

    /**
     * Get testimonial from firestore
     * @returns 
     */
    static lists() {
        return new Promise((resolve, reject) => {
            const q = query(collection(FirebaseServices.firestore(), Config.firestore.testimonial));
            getDocs(q).then((results) => {
                return resolve(results)
            }).catch((error) => {
                return reject(error)
            })
        });
    }

    /**
     * Save testimonial to firestore
     * @param {*} name 
     * @param {*} message 
     * @returns 
     */
    static save(name, message) {
        return new Promise((resolve, reject) => {
            setDoc(doc(collection(FirebaseServices.firestore(), Config.firestore.testimonial)), {
                name: name,
                message: message,
                date: Moment().format('MMMM DD, YYYY')
            }).then((results) => {
                return resolve(results)
            }).catch((error) => {
                return reject(error)
            })
        });
    }

}

export default Testimonial;