import Config from "../config/app";
import EncryptionServices from "./Encryption";

class WhatsappServices {

    /**
     * Template for booking
     * @param {*} data 
     * @returns 
     */
    static bookTemplate(data) {
        /**
         * Hai Admin!
         * 
         * Saya ingin melakukan pemesanan paket tour, dengan informasi sebagai berikut:
         * - ID Order: {data.order_id}
         * - Nama Paket: {data.product_name}
         * - Nama Lengkap: {data.fullname}
         * - Email: {data.email}
         * - No. HP: {data.phone}
         * - Tanggal Berangkat: {data.book_date}
         * - Tanggal Pemesanan: {data.date}
         * 
         * Terima Kasih
         */

        var TEMPLATE = `Hai Admin!` + "\n"
            TEMPLATE += `Saya ingin melakukan pemesanan paket tour, dengan informasi sebagai berikut:` + "\n"
            TEMPLATE += `- ID Order: ${data.order_id}` + "\n"
            TEMPLATE += `- Nama Paket: ${data.product_name}` + "\n"
            TEMPLATE += `- Nama Lengkap: ${data.fullname}` + "\n"
            TEMPLATE += `- Email: ${data.email}` + "\n"
            TEMPLATE += `- No. HP: ${data.phone}` + "\n"
            TEMPLATE += `- Tanggal Berangkat: ${data.book_date}` + "\n"
            TEMPLATE += `- Tanggal Pemesanan: ${data.date}` + "\n"
            TEMPLATE += `Terima Kasih!`

        return encodeURIComponent(TEMPLATE)
    }

    /**
     * Template for negotiate tour package
     * @param {*} data 
     * @returns 
     */
    static negotiateTourPackageTemplate(data) {
        /**
         * Hai Admin!
         * 
         * Saya ingin menawar paket tour berikut:
         * - Nama Paket: {data.name}
         * - Harga: {data.price}
         * - Durasi: {data.duration}
         * - Destinasi: {data.destination}
         * 
         * Terima Kasih
         */

        var TEMPLATE = `Hai Admin!` + "\n"
            TEMPLATE += `Saya ingin menawar paket tour berikut:` + "\n"
            TEMPLATE += `- Nama Paket: ${data.name}` + "\n"
            TEMPLATE += `- Harga: ${data.price}` + "\n"
            TEMPLATE += `- Durasi: ${data.duration}` + "\n"
            TEMPLATE += `- Destinasi: ${data.destination}` + "\n"
            TEMPLATE += `Terima Kasih!`

        return encodeURIComponent(TEMPLATE)
    }

    /**
     * Send message to admin
     * @param {*} message 
     * @returns 
     */
    static send_to_admin(message) {
        return this.send(Config.app.whatsapp_admin, message);
    }

    /**
     * Send message to whatsapp
     * @param {*} phone 
     * @param {*} message 
     */
    static send(phone, message) {
        window.open(`https://wa.me/${phone}?text=${message}`);
    }
}

export default WhatsappServices;