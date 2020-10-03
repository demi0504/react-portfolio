import React from "react";
import Project from "../components/Project";

import resume from '../images/Screenshot (21).png';
import resumepdf from '../images/demi-ripley.pdf';

function Portfolio() {
  return (
    <div>
      <div className="jumbotron jumbotron-portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ul className="noBull">
              <li><i className="fas fa-cocktail"></i></li>
              <li><h1 className="portfolio-heading">Bar Related Accomplishments</h1></li>
              <li>Find me on <a href="https://bartenderatlas.com/bartenders/demi-ripley/" target="_blank" rel="noopener noreferrer">Bartender Atlas</a></li>
              <li><a href="https://beveragealcoholresource.com/bar-certificate-holders/" target="_blank" rel="noopener noreferrer">Certified BAR Ready</a></li>
              <li>Former <a href="https://www.speed-rack.com/about" target="_blank" rel="noopener noreferrer">Speed Rack</a> Competitor</li>
              <li>2015 Camp Runamok Attendee</li>
              <li>Learned from Gaz Regan at <a href="http://www.gazregan.com/cocktails-in-the-country-2015/" target="_blank" rel="noopener noreferrer">Cocktails in the Country</a></li>
              <li><h3>Bartending in the wild:</h3></li>
              <li><a href="https://www.wtvr.com/2018/02/14/valentines-day-drinks" target="_blank" rel="noopener noreferrer">Valentine's Day Drinks</a></li>
              <li><a href="https://wtvr.com/2017/08/25/cheers-its-national-whiskey-sour-day/" target="_blank" rel="noopener noreferrer">National Whiskey Sour Day</a></li>
              <li><a href="https://www.wtvr.com/2017/07/24/celebrate-national-tequila-day" target="_blank" rel="noopener noreferrer">National Tequila Day</a></li>
              <li><a href="https://wtvr.com/2017/07/03/these-drinks-will-have-you-howling-for-more/" target="_blank" rel="noopener noreferrer">More Tequila Drinks!!</a></li>
            </ul>
          </div>

          <div className="col-lg-6">
            <ul className="noBull">
              <li><i className="fas fa-code"></i></li>
              <li><h1 className="portfolio-heading">Developer</h1></li>
              <li><h3>Languages I Speak:</h3></li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li><h3>Dev Tools:</h3></li>
              <li>Bootstrap</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Heroku</li>
              <li>React</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Project />
    <div class="container noBull">
        <head><h1>Resume</h1></head>
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="card" style={{ width: 18 + 'rem' }}>
              <a href={resumepdf} target="_blank">
                <img className="card-img-top" src={resume} alt="Image of resume"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;