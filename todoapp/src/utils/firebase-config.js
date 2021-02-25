import firebaseAuth from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfVlpb7lRC_gq9qxhW4kE0FkKx26hLLBw",
    authDomain: "to-do-app-23c01.firebaseapp.com",
    databaseURL: "https://to-do-app-23c01-default-rtdb.firebaseio.com",
    projectId: "to-do-app-23c01",
    storageBucket: "to-do-app-23c01.appspot.com",
    messagingSenderId: "865688719871",
    appId: "1:865688719871:web:ff60c67c428ee3235f17ca",
    measurementId: "G-EWFQJ3BGET"
};
firebaseAuth.initializeApp(firebaseConfig);

export { firebaseAuth }