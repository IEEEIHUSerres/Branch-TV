import * as React from 'react';
import './Logo.css';
import LogoImage from './../../assets/logo.png';

class Logo extends React.Component {
  render() {
    return (
      <img className="logo" src={LogoImage} alt="IEEE"/>
    );
  }
}

export default Logo;
