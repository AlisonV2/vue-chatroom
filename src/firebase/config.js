import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './cred';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

db.enablePersistence().catch((error) => {
    console.log(`Firebase persistence error ${error.code}`);
});

export { 
    db, 
    timestamp, 
    auth 
};