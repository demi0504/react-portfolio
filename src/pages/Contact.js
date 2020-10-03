import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container contactSection">
            <div className="row">
              <form className="col-md-4 offset-md-4">
                <div className="contact offset">
                  <div className="contactText">If you want to get in touch, talk to me about a project or collaboration,
                    fill out the form below or send an email to <a href="ripley.demi@gmail.com">ripley.demi@gmail.com.</a></div>
                    <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" required />
                    <small id="emailHelp" className="form-text text-muted">Don't worry, I'll never share your email with anyone.</small>
                </div>
                <div className="form-group">
                    <label for="text">Your Name</label>
                    <input type="text" className="form-control" id="text" aria-describedby="emailHelp" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" id="submit-btn">Submit</button>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
