import React from 'react';
import firebase from '../../firebase';
import './landingPage.scss';
import { Button, Container } from '@material-ui/core';
export const LandingPage = ({ userData }) => {
  return (
    <Container maxWidth="sm">
      <h1>{userData.displayName}</h1>
      <h2>{userData.email}</h2>
      <h3>{userData.uid}</h3>
      <img src={userData.photoURL} alt={userData.displayName} /> <br />
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
