
import React from 'react';
import {images} from '../../constants';


import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div classNme="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className='p__opensans'>Our restaurant is the city's finest. Enjoy delicious food, great atmosphere, and top-notch service.
         Come dine with us for a memorable experience that will leave you wanting more..</p>

         <button type="button" className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife"/>
      </div>

      <div classNme="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className='p__opensans'>Established four years ago, our restaurant has flourished, attracting a loyal customer base. 
                 Over time, we have grown into a beloved dining destination, cherished by many for our exceptional service and delectable offerings. Join us on this culinary journey that continues to delight and satisfy our valued patrons.
                 </p>

         <button type="button" className='custom__button'>Know More</button>
      </div>


    </div>
    AboutUs
  </div>
);

export default AboutUs;

