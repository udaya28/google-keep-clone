import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCMNsOfzm04c2evU5C2BaUHpecMNZ2z7SU',
  authDomain: 'keep-clone-udaya.firebaseapp.com',
  databaseURL: 'https://keep-clone-udaya.firebaseio.com',
  projectId: 'keep-clone-udaya',
  storageBucket: 'keep-clone-udaya.appspot.com',
  messagingSenderId: '134603175107',
  appId: '1:134603175107:web:2a74da86da09ba7ab1de76',
  measurementId: 'G-BT6KV4XHBC',
};

const App = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const DB = App.firestore();
export const auth = firebase.auth();
export default firebase;