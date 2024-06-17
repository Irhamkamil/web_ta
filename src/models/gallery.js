import FirebaseServices from "../services/Firebase";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import Config from "../config/app";

class Gallery {
    /**
     * Get gallery from firestore
     */
    static lists() {
        return new Promise((resolve, reject) => {
            const q = query(collection(FirebaseServices.firestore(), Config.firestore.gallery));
            getDocs(q).then((results) => {
                return resolve(results)
            }).catch((error) => {
                return reject(error)
            })
        });
    }
}

export default Gallery;