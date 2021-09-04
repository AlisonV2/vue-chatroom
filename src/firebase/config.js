import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_SENDER_ID,
    appId: process.env.VUE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

db.enablePersistence().catch((error) => {
    console.log(`Firebase persistence error ${error.code}`);
});

export { db, timestamp };