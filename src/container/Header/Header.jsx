
import React from 'react';

import {images} from '../../constants';
import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home" >
    <div className="app__wrapper_info">
      <SubHeading title="Pursue the latest taste sensation" />
      <h1 className='app__header-h1'>The secret to elegant eating</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>After using our services, you'll leave happy and content,
       knowing we've met your needs. Your experience with us will be satisfying and leave you pleased.
  </p>
  <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  
  </div>
);

export default Header;
