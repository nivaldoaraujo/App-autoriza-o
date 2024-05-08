import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBC2MkxfSAlh8eETfcD9EDmOKTUL7RRCTc",
    authDomain: "aprendendo-firebase-badc6.firebaseapp.com",
    databaseURL: "https://aprendendo-firebase-badc6-default-rtdb.firebaseio.com",
    projectId: "aprendendo-firebase-badc6",
    storageBucket: "aprendendo-firebase-badc6.appspot.com",
    messagingSenderId: "327039936473",
    appId: "1:327039936473:web:cc1f126d5f05a5d20bdbc8",
    measurementId: "G-FS56S0279T"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase
  