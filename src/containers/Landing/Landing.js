import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Landing">
        <div class="body-container col-11 col-md-10 col-lg-9 col-centered text-center">
          <div class="row">
            <div id="intro-left" class="col 10 col-lg-6">
              <div id="landing-banner">
                <span id="logo">STOCKOVERFLOW</span> provides good service with
                no fees. A powerful tool to track and visualize stock data.
              </div>
              <div id="signup-form">
                <form action="/register" method="POST">
                  <div class="form-row">
                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        placeholder="Username"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Email"
                      />
                    </div>

                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        name="firstname"
                        placeholder="First name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        name="lastname"
                        placeholder="Last name"
                      />
                    </div>

                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-12">
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <div class="col-12">
                          <input
                            type="password"
                            class="form-control"
                            name="confirm"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                    </div>

                    <div id="password-warning" class="col-md-6">
                      Password must contain:
                      <ul>
                        <li>At least 8 characters</li>
                        <li>Numeric characters</li>
                        <li>Alphabetical characters</li>
                        <li>Special characters</li>
                      </ul>
                    </div>

                    <div class="button-container">
                      <button class="btn green-button">Join Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              id="intro-right"
              class="col-12 col-lg-6 d-none d-md-block pb-5 pb-lg-0"
            >
              <div id="stock-image" class="mt-md-5 mt-lg-0"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
