import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF04Ff0DDvgeDdW0YA94I6obOaEtqmXTc",
  authDomain: "shop-63f24.firebaseapp.com",
  databaseURL: "https://shop-63f24.firebaseio.com",
  projectId: "shop-63f24",
  storageBucket: "shop-63f24.appspot.com",
  messagingSenderId: "509972376791",
  appId: "1:509972376791:web:59058478c868005a689492",
  measurementId: "G-95GPVZJW4F"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };