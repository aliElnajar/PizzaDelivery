import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  ...process.env.REACT_APP_FIREBASE,
  projectId: "food-delivery-52ae0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
