import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './loginPage.scss';
import { Box, Container } from '@material-ui/core';
import firebase,{auth ,signInWithGoogle} from '../../firebase';

export const LoginPage = () => {

    const handleSignUp = () =>{
        signInWithGoogle();
    }
    useEffect(() => {
        
        return () => {
            
        }
    }, [])
  return (
    <Container maxWidth="sm" >
      <div className="login"  >
        <Button variant="contained" color="primary" onClick={handleSignUp}>
          SignUp
        </Button>
      </div>
    </Container>
  );
};
