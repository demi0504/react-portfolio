import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <a href="https://github.com/demi0504" target="_blank" rel="noopener noreferrer" className="fa fa-github"></a>
          <a href="https://www.linkedin.com/in/demi-ripley-224759118/" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>
          <a href="https://www.facebook.com/demi.ann.14" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>
          <a href="https://twitter.com/demiasinhalf" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"></a>
          <a href="https://www.instagram.com/demiasinhalf/?hl=en" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
        </div>
      </footer>
  );
}

export default Footer;