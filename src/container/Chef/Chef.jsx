import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's"word/>
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">Our satisfaction comes when our users satisfied with the provided services</p>
        </div>
        <p className="p__opensans">We are dedicated to fulfilling our customers' desires by providing precisely what they seek, 
        ensuring their satisfaction and loyalty through personalized service and attention to their needs.
           </p>
      </div>

      <div className="app__chef-sign">
        <p>Samuel Tiruneh</p>
        <p className="p__opensans">Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
