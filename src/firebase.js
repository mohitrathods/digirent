// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import "firebase/storage";
// import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAHW2t3rJY5DQDwlGj8sEr9ENs4co_mCI0",
//   authDomain: "deproject-8dc4f.firebaseapp.com",
//   databaseURL: "https://deproject-8dc4f-default-rtdb.firebaseio.com",
//   projectId: "deproject-8dc4f",
//   storageBucket: "deproject-8dc4f.appspot.com",
//   messagingSenderId: "701074642615",
//   appId: "1:701074642615:web:3accda05680c76eb751f32",
//   measurementId: "G-V6MTT6W355",
// };

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHW2t3rJY5DQDwlGj8sEr9ENs4co_mCI0",
  authDomain: "deproject-8dc4f.firebaseapp.com",
  databaseURL: "https://deproject-8dc4f-default-rtdb.firebaseio.com",
  projectId: "deproject-8dc4f",
  storageBucket: "deproject-8dc4f.appspot.com",
  messagingSenderId: "701074642615",
  appId: "1:701074642615:web:3accda05680c76eb751f32",
  measurementId: "G-V6MTT6W355",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// export const storage = getStorage();
export { db, auth, storage };
export default firebaseApp;
// export default firebaseConfig;
// export default firebase;
