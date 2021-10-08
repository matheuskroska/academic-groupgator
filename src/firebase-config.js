import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig =  {
    apiKey: "AIzaSyDh-f_xr_QLJ0pqBDDq-t1jlNPWhXOIAog",
    authDomain: "groupgator-ed4db.firebaseapp.com",
    projectId: "groupgator-ed4db",
    storageBucket: "groupgator-ed4db.appspot.com",
    messagingSenderId: "608229845484",
    appId: "1:608229845484:web:ffd950ca0e82c4fbcaf8c9",
    measurementId: "G-ZSMHE2ZNJH"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export default firebase;
