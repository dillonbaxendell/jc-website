import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './JCLandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function JCLandingPage() {
  const history = useHistory();

  function handleContactMe() {
    console.log('clicked Contact Me');
  }


  return (
    <div className="container">
    <div className="screen">

      <div className="grid">
        <div className="spacer">

        </div>
        <div className="center grid-col grid_col_1">
          <h1>
            Welcome to my world.
          </h1>
          <h2 className="button" onClick={handleContactMe}>
            contact me
          </h2>
        </div>

        
        <div className="grid-col grid_col_2">
          <img src="../Imgs/jcwithcircle.png" alt="jcwithcircle"/>
        </div>

      </div>
    </div>
    </div>
  );
}

export default JCLandingPage;
