import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyApgTkCE1hEt3ebHvQc7gvnGcHA3ZYcmro",
    authDomain: "whatsapp-clone-6d591.firebaseapp.com",
    projectId: "whatsapp-clone-6d591",
    storageBucket: "whatsapp-clone-6d591.appspot.com",
    messagingSenderId: "885151835359",
    appId: "1:885151835359:web:9915428269ff6d3f2bb56a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;