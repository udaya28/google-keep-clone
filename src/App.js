import React, { useState, useEffect } from 'react';
import './App.scss';
import { LoginPage } from './components/LoginPage/loginPage';
import { LandingPage } from './components/LandingPage/landingPage';
import firebase from './firebase';
// import firebase,{DB,auth ,signInWithGoogle} from './firebase';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (data) {
      if (data) {
        const { photoURL, uid, email, displayName } = data;
        setUserData({ photoURL, uid, email, displayName });
        setLoggedIn(true);
        console.log('log in');
      } else {
        setUserData({});
        setLoggedIn(false);
        console.log('log out');
      }
    });
    return () => {};
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <LandingPage userData={userData} /> : <LoginPage />}
    </div>
  );
}

export default App;

// useEffect(() => {
//   DB.collection('test')
//     .onSnapshot((snapshot) => {
//       console.log(snapshot.docs.map((doc) => doc.data().greet));

//     });

// }, []);
