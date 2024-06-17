import Noty from 'noty';
// Docs : https://ned.im/noty/#/installation
class NotyServices {
    /**
     * Show success message using Noty
     * @param {*} message 
     */
    static success(message) {
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: message,
            timeout: 3000,
        }).show();
    }

    /**
     * Show error message using Noty
     * @param {*} message 
     */
    static error(message) {
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: message,
            timeout: 3000,
        }).show();
    }

    /**
     * Show warning message using Noty
     * @param {*} message 
     */
    static warning(message) {
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: message,
            timeout: 3000,
        }).show();
    }

    /**
     * Show info message using Noty
     * @param {*} message 
     */
    static info(message) {
        new Noty({
            type: 'info',
            layout: 'topRight',
            text: message,
            timeout: 3000,
        }).show();
    }
}

export default NotyServices;