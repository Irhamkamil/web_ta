const Config = {
    /**
     * Application configuration section
     */
    'app': {
        // application name
        name: 'OUTREKK',

        // path in the storage bucket to stored the logo image
        logo: 'assets/outrekk.png',

        // Admin whatsapp number
        whatsapp_admin: '6282126544124',
    },

    /**
     * Firebase configuration section
     */
    'firebase' : {
        apiKey: "AIzaSyDQsmevLmKJHQ19_hXHZYwvJfRoMmFJ5vI",
        authDomain: "dashboard-ta-2b62b.firebaseapp.com",
        projectId: "dashboard-ta-2b62b",
        storageBucket: "dashboard-ta-2b62b.appspot.com",
        messagingSenderId: "279955156011",
        appId: "1:279955156011:web:77e11eeea6ef290dd98e6e",
        measurementId: "G-YKV0450CMD"
    },

    /**
     * Firestore collection name configuration section
     */
    'firestore': {
        products: 'products',
        gallery: 'gallery',
        testimonial: 'testimonial',
        booking: 'booking',
        users: 'users',
    },

    /**
     * Storage configuration section
     */
    'storage': {
        // User profile image path in the storage bucket
        user_profile: 'users',
    }
}

export default Config;