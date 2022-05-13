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

/**MAIN WORKING FIREBASE OLD*/
const firebaseApp = firebase.initializeApp({
 // apiKey: "AIzaSyAHW2t3rJY5DQDwlGj8sEr9ENs4co_mCI0",
  //authDomain: "deproject-8dc4f.firebaseapp.com",
  //databaseURL: "https://deproject-8dc4f-default-rtdb.firebaseio.com",
  //projectId: "deproject-8dc4f",
  //storageBucket: "deproject-8dc4f.appspot.com",
  //messagingSenderId: "701074642615",
  //appId: "1:701074642615:web:3accda05680c76eb751f32",
  //measurementId: "G-V6MTT6W355",

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
  apiKey: "AIzaSyDaM3qYujdhIy2ETinh4rACQg_vtEb5Ehs",
  authDomain: "digirent-new.firebaseapp.com",
  projectId: "digirent-new",
  storageBucket: "digirent-new.appspot.com",
  messagingSenderId: "243524388849",
  appId: "1:243524388849:web:87b50b8d8e4b433d2a2650",
  measurementId: "G-W1ZLT87TLE"
//};
});

/**MAIN WORKING FIREBASE NEW */

/**AFTER DB CHANGED API */
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDP8klRWLHnYPr_g-srXUMC0BQr9pN4--c",
//   authDomain: "digirent-407f6.firebaseapp.com",
//   projectId: "digirent-407f6",
//   storageBucket: "digirent-407f6.appspot.com",
//   messagingSenderId: "532251216299",
//   appId: "1:532251216299:web:2a5fd5272aedd1f64deaee",
//   measurementId: "G-909J3YKK93",
// });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// export const storage = getStorage();
export { db, auth, storage };
export default firebaseApp;
// export default firebaseConfig;
// export default firebase;
