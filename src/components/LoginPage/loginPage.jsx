import './loginPage.scss';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { signInWithGoogle } from '../../firebase';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import todo from '../../svg/todo.svg';
import notes from '../../svg/notes.svg';
import sync from '../../svg/sync.svg';
import googleIcon from '../../svg/google-icon.svg';

const useStyles = makeStyles({
  root: {
    color: '#525252',
    background: '#ffffff',
    fontWeight: '700',
    textTransform: 'none',
    borderRadius: '20px',
    width: '80%',
    marginTop: '15px',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
});
export const LoginPage = () => {
  const handleSignUp = () => {
    try {
      signInWithGoogle();
    } catch (error) {
      console.log(error.message);
    }
  };

  const Slide = (props) => {
    return (
      <div>
        <img src={props.img} alt="" className={props.className} />
        <div className="content">
          <p className="heading">{props.head}</p>
          <p className="caption">{props.content}</p>
        </div>
      </div>
    );
  };

  const classes = useStyles();
  return (
    <div className="full">
      <Container maxWidth="sm" className="login-main">
        <div className="login">
          <h1 className="head">Google keep clone</h1>
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
              <Slide
                img={todo}
                className="img img-first"
                head="Plan your day"
                content="Stay on track and get things done by making Todo"
              />
              <Slide
                img={notes}
                className="img"
                head="Stay on track"
                content="Quickly capture your thoughts anywhere by making Notes"
              />
              <Slide
                img={sync}
                className="img img-third"
                head="Synchronization in milliseconds"
                content="Synchronization among sign in devices without reloading"
              />
            </Carousel>
          </div>
          <Button
            variant="contained"
            onClick={handleSignUp}
            startIcon={
              <img src={googleIcon} alt="" srcSet="" className="logo-g" />
            }
            className={`${classes.root} sign-in-button`}
          >
            Sign in with Google
          </Button>
        </div>
      </Container>
    </div>
  );
};
