import Noty from 'noty';

class NotyServices {
    static success(message) {
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: message,
            timeout: 3000,
        }).show();
    }

    static error(message) {
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: message,
            timeout: 3000,
        }).show();
    }

    static warning(message) {
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: message,
            timeout: 3000,
        }).show();
    }

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