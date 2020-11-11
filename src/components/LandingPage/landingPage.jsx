import React from 'react';
import firebase from '../../firebase';
import './landingPage.scss';
import { Button, Container } from '@material-ui/core';
export const LandingPage = ({ userData }) => {
  return (
    <Container >
      <div className="header">
      <h1>Hello {userData.displayName}</h1>

      <img src={userData.photoURL} alt={userData.displayName} /> <br />
      </div>
      {/* <h2>{userData.email}</h2>
      <h3>{userData.uid}</h3> */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => firebase.auth().signOut()}
      >
        Sign Out
      </Button>
    </Container>
  );
};
