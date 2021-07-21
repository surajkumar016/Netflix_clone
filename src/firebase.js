// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1lSBGqQyVTL2EkSnMTBVU9NgSAurw9j8",
    authDomain: "netflix-clone-fdb08.firebaseapp.com",
    projectId: "netflix-clone-fdb08",
    storageBucket: "netflix-clone-fdb08.appspot.com",
    messagingSenderId: "929849391223",
    appId: "1:929849391223:web:a8e23184c9d4c2fcfd6e72",
    measurementId: "G-G6CZPS2NWH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;
