import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './JCLandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function JCLandingPage() {
  const history = useHistory();


  return (
    <div className="container">

      <div className="grid">
        <div className="grid-col grid_col_1">
          <h1>
            Welcome to my world.
          </h1>

          <h2 className="button">
            contact me
          </h2>
          

        </div>
        <div className="grid-col grid_col_2">
          Picture goes here
        </div>
      </div>
    </div>
  );
}

export default JCLandingPage;
