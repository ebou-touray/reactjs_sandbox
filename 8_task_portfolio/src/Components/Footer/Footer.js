import React from "react";
import "./Footer.css";



const Footer = () => {
  return (
    
      <footer className="footer is-primary">
        <div className="container">
          <div className="column">
            <div className="column">
              <p>
                <footer>&copy; Copyright 2020 Ebou Touray | All right reserved | Terms of Service | Privacy</footer>
              </p>
            </div>
            <div className="column has-text-right">
              <a className="icon" href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="icon" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    
    
  );
};

export default Footer;
