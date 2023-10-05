// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAiUhanXDttQRWX85gg1TkR5npYVMen450",
    authDomain: "chatappvue3-d8456.firebaseapp.com",
    projectId: "chatappvue3-d8456",
    storageBucket: "chatappvue3-d8456.appspot.com",
    messagingSenderId: "710950256250",
    appId: "1:710950256250:web:63bb9a389d6a36ad4cc5c3",
    measurementId: "G-JS6GRNCWXK"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore,timestamp, projectAuth}