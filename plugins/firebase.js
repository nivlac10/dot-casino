import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/analytics'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export default ({ env, store }, inject) => {
    const firebaseConfig = {
        apiKey: "AIzaSyBex5YRB4ZKG_GQZP9CjmtNDnJ8EMELUTA",
        authDomain: "dot-casino.firebaseapp.com",
        projectId: "dot-casino",
        storageBucket: "dot-casino.appspot.com",
        messagingSenderId: "564364687130",
        appId: "1:564364687130:web:83effe9d32b8375f5b9ea3"
    }
  
    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
    }
  
    
  
    inject('firebase', firebase)
  }
