// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
      apiKey: "AIzaSyCv8nf_vQFeQkSaoepOZq0amwh_8KFwRuQ",
      authDomain: "challenge-fe7c4.firebaseapp.com",
      projectId: "challenge-fe7c4",
      storageBucket: "challenge-fe7c4.appspot.com",
      messagingSenderId: "9480408453",
      appId: "1:9480408453:web:86e55907051c8e9dd108ec",
      measurementId: "G-P4HE6C6WVZ"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export {db, auth};