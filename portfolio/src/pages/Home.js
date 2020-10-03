import React, { Component } from 'react'
// import Jumbotron from "../components/Jumbotron";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-image" style={{backgroundImage: 'url(/images/bnbdemi-copy.jpg)'}}>
          <h1 className="display-4">Bartender, Developer, Runner</h1>
          <hr className="my-4" />
          <p>Hi, I'm Demi, thanks for checking out my site.</p>
        </header>
        <main className="container">
          <div className="row">
              <div className="col-lg-4 offset-lg-4">
                  <p id="about-me">I grew up in Southwest Virginia.
                    <br />
                  After living in Richmond, VA for almost 10 years I moved to Nashville, Tennessee.
                    <br />
                  I'm excited to be learning about web development through Vanderbilt's Coding Bootcamp and look forward to
                      a change of careers once I've completed the course.
                  </p>
              </div>
          </div>
        </main>
      </div>
    )
  }
}
