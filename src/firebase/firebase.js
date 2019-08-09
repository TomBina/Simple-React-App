import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCamNLHUP3uDwUAN80Xtx_1hVNdfFYBebY",
    authDomain: "cb-simple-react-app.firebaseapp.com",
    databaseURL: "https://cb-simple-react-app.firebaseio.com",
    projectId: "cb-simple-react-app",
    storageBucket: "cb-simple-react-app.appspot.com",
    messagingSenderId: "425786567074",
    appId: "1:425786567074:web:b8074db6af5e2886"
};
let app = firebase.initializeApp(firebaseConfig);
let db = app.firestore();

export function auth() {
    return app.auth();
}

export default db;
