import Button from '@material-ui/core/Button';
import './loginPage.scss';
import { Container } from '@material-ui/core';
import { signInWithGoogle } from '../../firebase';

export const LoginPage = () => {
  const handleSignUp = () => {
    try {
      signInWithGoogle();
    } catch (error) {
      console.log(error.message);
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
