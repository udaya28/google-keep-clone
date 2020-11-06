import Button from '@material-ui/core/Button';
import './loginPage.scss';
import { Container } from '@material-ui/core';
import { signInWithGoogle } from '../../firebase';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import todo from '../../svg/todo.svg';
import notes from '../../svg/notes.svg';
import sync from '../../svg/sync.svg';
import googleIcon from '../../svg/google-icon.svg';
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
        <div className="slide-1">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            interval={4000}
            stopOnHover={false}
            swipeable={true}
            autoPlay
          >
            <div>
              <img src={todo} alt="" className="img-first"/>
              <div className="content">
                <p className="heading">Plan your day</p>
                <p className="caption">
                  Stay on track and get things done by making Todo
                </p>
              </div>
            </div>
            <div>
              <img src={notes} alt="" />
              <div className="content">
                <p className="heading">Stay on track</p>
                <p className="caption">
                  Quickly capture your thoughts anywhere by making Notes
                </p>
              </div>
            </div>
            <div>
              <img src={sync} alt="" className="img-third"/>
              <div className="content">
                <p className="heading">Synchronization in milliseconds </p>
                <p className="caption">
                Synchronization among sign in devices without reloading
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignUp}
          startIcon={<img src={googleIcon} alt="" srcSet="" />}
        >
          Sign in with Google
        </Button>
      </div>
    </Container>
  );
};
