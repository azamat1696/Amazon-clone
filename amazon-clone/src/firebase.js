import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK5gzbIv-PRSfR7xBEmgo3hYCcZYlOUkA",
  authDomain: "clone31-4e1fc.firebaseapp.com",
  databaseURL: "https://clone31-4e1fc-default-rtdb.firebaseio.com",
  projectId: "clone31-4e1fc",
  storageBucket: "clone31-4e1fc.appspot.com",
  messagingSenderId: "829866450515",
  appId: "1:829866450515:web:3743aa39d2a0d9cce9b0a6",
  measurementId: "G-ZT1726EG7N"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  export{db, auth};