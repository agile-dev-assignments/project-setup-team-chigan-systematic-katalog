import React from 'react';
import './About.css';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const About = () => {

  return (
    <div className="About">
        <h1>About Us</h1>
        <p className="aboutDesc">Katalog is a platform that aims to help photocard collectors 
          (specifically Kpop fans) find information about specific photocards 
          (such as average market price) and expand their photocard collection. 
          The website will serve as an archive with information on the photocards 
          avaliable on the market. Each photocard page will show which users are 
          selling or trading that photocard. Katalog will also provide valuable data 
          (such as average market price) to buyers and sellers alike.</p>
        <h1>Contact Us</h1>
        <p>Email: KatalogWebApp@gmail.com</p>
        <h3>Social Media</h3>
        <div className="icons">
          <a href="https://www.twitter.com/katalogwebapp/" className="twitterIcon">
            <FaTwitter size="35px"/>
          </a>
          <a href="https://www.instagram.com/katalogwebapp/" className="instagramIcon">
            <FaInstagram size="35px"/>
          </a>
        </div>
        
    </div>
  );
}

export default About;
