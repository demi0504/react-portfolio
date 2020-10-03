import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container contactSection">
            <div class="row">
              <form class="col-md-4 offset-md-4">
                <div class="contact offset">
                  <div class="contactText">If you want to get in touch, talk to me about a project or collaboration,
                    fill out the form below or send an email to <a href="ripley.demi@gmail.com">ripley.demi@gmail.com.</a></div>
                    <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" required />
                    <small id="emailHelp" class="form-text text-muted">Don't worry, I'll never share your email with anyone.</small>
                </div>
                <div class="form-group">
                    <label for="text">Your Name</label>
                    <input type="text" class="form-control" id="text" aria-describedby="emailHelp" placeholder="Your Name" required />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="submit-btn">Submit</button>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
