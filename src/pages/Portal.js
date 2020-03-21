import ExternalRedirect from '../components/ExternalRedirect/ExternalRedirect';
import React from 'react';
import './Portal.css';
import Logo from '../components/Logo/Logo';

class Portal extends React.Component {
  render() {
    return (
      <div>
        <div className="logo-holder">
          <Logo/>
        </div>
        <div className="content-holder">
          <ExternalRedirect
            goTo="https://www.youtube.com/channel/UCL5HBLikQJIAoKiyew8qx9Q"
          />
        </div>
      </div>
    );
  }
}

export default Portal;
