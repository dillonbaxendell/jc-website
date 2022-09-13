import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className="screen">

        <div className="grid">
          <div className="spacer"></div>
            <div className="grid-col about-grid_col_1">
              <img className="about-img" src="../Imgs/JCPolygon.png" atl="strongjc"/>
            </div>

            <div className="grid-col about-grid_col_2" id="typo-content">
              <h2 className="header" id="about-header">
                here. me.
              </h2>
              <a href="#" class="fa fa-facebook"></a>
              
              <div className="socials">
                
              </div>
              <div>
                <p className="about-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magnum aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
             
            </div>
        </div>
      
      </div>
    </div>
  );
}

export default AboutPage;
