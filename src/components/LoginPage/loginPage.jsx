import Button from '@material-ui/core/Button';
import './loginPage.scss';
import { Container } from '@material-ui/core';
import { signInWithGoogle } from '../../firebase';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import s from '../../svg/xy.svg';
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
        <div>
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            // infiniteLoop={true}
            interval={2500}
            stopOnHover={false}
            swipeable={true}
            autoPlay
          >
            <div>
              <img src={s} alt="" />
              <div className="content">
                <p className="heading">Brands curated with care</p>
                <p className="caption">
                  Invest in your favorites across fashion, lifestyle, food &
                  beverages & more
                </p>
              </div>
            </div>
            <div>
              <img src={s} alt="" />
              <div className="content">
                <p className="heading">Brands curated with care</p>
                <p className="caption">
                  Invest in your favorites across fashion, lifestyle, food &
                  beverages & more
                </p>
              </div>
            </div>
            <div>
              <img src={s} alt="" />
              <div className="content">
                <p className="heading">Brands curated with care</p>
                <p className="caption">
                  Invest in your favorites across fashion, lifestyle, food &
                  beverages & more
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <Button variant="contained" color="primary" onClick={handleSignUp}>
          SignUp
        </Button>
      </div>
    </Container>
  );
};
