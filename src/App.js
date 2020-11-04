import React, { useState, useEffect } from 'react';
import './App.scss';
import { LoginPage } from './components/LoginPage/loginPage';
import { LandingPage } from './components/LandingPage/landingPage';
// import firebase,{DB,auth ,signInWithGoogle} from './firebase';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log(isLoggedIn, userData);
    return () => {};
  }, [isLoggedIn, userData]);
  return (
    <div className="App">
      {isLoggedIn ? (
        <LandingPage userData={userData} />
      ) : (
        <LoginPage
          userData={userData}
          setUserData={setUserData}
          setLoggedIn={setLoggedIn}
        />
      )}
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
