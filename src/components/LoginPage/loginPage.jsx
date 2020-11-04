import Button from '@material-ui/core/Button';
import './loginPage.scss';
import {  Container } from '@material-ui/core';
import firebase, { auth, signInWithGoogle } from '../../firebase';

export const LoginPage = ({ userData, setUserData, setLoggedIn }) => {
  const handleSignUp = async () => {
    let loginData,
      emailVerified = false,
      errorMessage = '';
    try {
      loginData = await signInWithGoogle();
      console.log(loginData.user);
      emailVerified = loginData.user.emailVerified;
    } catch (error) {
      errorMessage = error.message;
    } finally {
      if (emailVerified) {
        const { photoURL, uid, email, displayName } = loginData.user;
        await setUserData({ photoURL, uid, email, displayName });
        setLoggedIn(true);
      } else {
        console.log(errorMessage);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <div className="login">
        <Button variant="contained" color="primary" onClick={handleSignUp}>
          SignUp
        </Button>
      </div>
    </Container>
  );
};
