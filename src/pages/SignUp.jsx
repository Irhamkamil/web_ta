import { Component } from "react";
import { NavLink } from "react-router-dom";

export class SignUp extends Component {
  state = {
    // diambil dari id pada input
    email: "",
    password: "",
    username: "",
    phonenumber: ""
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6 mt-40 mb-20">
        <form onSubmit={this.handleSubmit}>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Sign Up</h1>
            <p className="text-sm">Sign in to access your account</p>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Username</label>
              <input
                placeholder="Type here"
                type="text"
                id="username"
                onChange={this.handleChange}
                className="input max-w-full"
              />
              <label className="form-label">
                <span className="form-label-alt">Please enter a username.</span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label">Phone Number</label>
              <input
                placeholder="Type here"
                type="tel"
                id="phonenumber"
                pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                onChange={this.handleChange}
                className="input max-w-full"
              />
              <label className="form-label">
                <span className="form-label-alt">Format: 1234-5678-9123</span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label">Email address</label>
              <input
                placeholder="Type here"
                type="email"
                id="email"
                onChange={this.handleChange}
                className="input max-w-full"
              />
              <label className="form-label">
                <span className="form-label-alt">
                  Please enter a valid email.
                </span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label">Password</label>
              <div className="form-control">
                <input
                  placeholder="Type here"
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  className="input max-w-full"
                />
              </div>
            </div>
            {/* <div className="form-field">
            <div className="form-control justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="checkbox" />
                <a href="#">Remember me</a>
              </div>
              <label className="form-label">
                <a className="link link-underline-hover link-primary text-sm">
                  Forgot your password?
                </a>
              </label>
            </div>
          </div> */}
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button className="btn btn-primary w-full">Sign Up</button>
              </div>
            </div>

            <div className="form-field">
              <div className="form-control justify-center">
                <NavLink
                  to="/signin"
                  className="link link-underline-hover link-primary text-sm"
                >
                  Do you already have an account? Sign in.
                </NavLink>
                {/* <a className="link link-underline-hover link-primary text-sm">
                Do you already have an account? Sign in.
              </a> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
