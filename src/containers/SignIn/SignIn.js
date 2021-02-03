import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="body-container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-5 col-xl-5">
            <div class="text-center" id="landing-banner">
              <div>Welcome to</div>
              <span id="logo">STOCKOVERFLOW</span>
            </div>

            <div class="form-row row justify-content-center">

              <form action="/login" method="POST" class="col-8">
                <div>
                  <input autocomplete="off" type="text" name="username" class="form-control"
                    placeholder="username" />
                </div>
                <div>
                  <input autocomplete="off" type="password" name="password" class="form-control"
                    placeholder="password" />
                </div>
                <div class="button-container pt-0">
                  <div class="button-container">
                    <button class="btn green-button">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>

              <div class="button-container pt-0">
                <form action="/login/google" method="GET">
                  <div class="button-container">
                    <button class="btn">
                      Sign In With Google
                    </button>
                  </div>
                </form>
              </div>

              <div class="button-container pt-0">
                <form action="/forgot" method="GET">
                  <div class="button-container">
                    <button class="btn green-button">
                      Forgot Password?
                    </button>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
