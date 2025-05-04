import React from 'react';
import { Facebook, Instagram } from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="footer-section text-white">
      <div className="container py-5">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h4 className="footer-brand">Justin Lyons</h4>
            <p>
              Your journey to peak performance starts here. Empower your body.
              Elevate your life.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about">About</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Follow Me</h5>
            <div className="footer-social">
              <a href="#"><Facebook 
              size={32}/></a>
              <a href="#"><Instagram 
              size={32}/></a>

            </div>
          </div>
        </div>

        <div className="text-center pt-4 border-top mt-4">
          <small>© {new Date().getFullYear()} Justin Lyons. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
