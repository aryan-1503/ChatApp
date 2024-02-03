import firebase from "firebase/compat/app";
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAP_D-IYyYNCWHTxaBECkFv0CGmeebL00g",
    authDomain: "chatappdevlop.firebaseapp.com",
    projectId: "chatappdevlop",
    storageBucket: "chatappdevlop.appspot.com",
    messagingSenderId: "1058389745349",
    appId: "1:1058389745349:web:1bd7a7525dee9cfbc45aac"
})
export const auth = app.auth()
export default app