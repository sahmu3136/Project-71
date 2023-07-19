import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBndwbQowjpPkSgvlbwx3k8AhNSRAVhsb4",
  authDomain: "e-rider-stage3.firebaseapp.com",
  projectId: "e-rider-stage3",
  storageBucket: "e-rider-stage3.appspot.com",
  messagingSenderId: "638309625685",
  appId: "1:638309625685:web:b0e156b959b4bd083609dc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
