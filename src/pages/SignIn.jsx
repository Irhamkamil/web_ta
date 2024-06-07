import { Component } from "react";
import { NavLink } from "react-router-dom";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="text-sm">Login to access your account</p>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
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
              <label htmlFor="password" className="form-label">
                Password
              </label>
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
            <div className="form-field">
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
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button className="btn btn-primary w-full">Login</button>
              </div>
            </div>

            <div className="form-field">
              <div className="form-control justify-center">
                <NavLink
                  to="/signup"
                  className="link link-underline-hover link-primary text-sm"
                >
                  Don&#39;t have an account yet? Sign up.
                </NavLink>
                {/* <a className="link link-underline-hover link-primary text-sm">
                Don&#39;t have an account yet? Sign up.
              </a> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
