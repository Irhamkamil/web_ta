import { Component } from "react";
import { NavLink } from "react-router-dom";
import FirebaseServices from '../services/Firebase'
import NotyServices from "../services/Noty";
import sessionStorageServices from "../services/SessionStorage";
import { Navigate } from "react-router-dom";
import UserModel from "../models/user";
export class SignUp extends Component {
  state = {
    // diambil dari id pada input
    email: "",
    password: "",
    address: "",
    country: "",
    phone: "",
    displayName: "",
    username: "",
    redirectToHome: false
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const state = this.state

    FirebaseServices.createUser(this.state.email, this.state.password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user

      UserModel.isUserNameExist(state.username).then((isExist) => {
        if (isExist) {
          NotyServices.error('Username already exist!')
          return false
        }
  
        // Save user to firestore
        UserModel.save(state.email, state.password, state.address, state.country, state.phone, state.displayName, state.username).then((results) => {
          // Save to session
          sessionStorageServices.set('user_email', user.email)
          sessionStorageServices.set('user_uid', user.uid)
          sessionStorageServices.set('user_fullname', state.displayName)
          sessionStorageServices.set('user_phone', state.phone)

          // Show success message
          NotyServices.success('Hi, ' + user.email + '! You have successfully signed up.')

          // Redirect to home
          this.setState({ redirectToHome: true });
        }).catch((error) => {
          NotyServices.error(error.message)
        })
        
      }).catch((error) => {
        NotyServices.error(error.message)
      })
    }).catch((error) => {
      NotyServices.error(error.message)
    })
  };

  render() {
    if (this.state.redirectToHome) {return <Navigate to="/" />; }
    return (
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6 mt-40 mb-20">
        <form onSubmit={this.handleSubmit}>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Sign Up</h1>
            <p className="text-sm">Sign in to access your account</p>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Full Name</label>
              <input
                placeholder="Type here"
                type="text"
                id="displayName"
                onChange={this.handleChange}
                className="input max-w-full"
              />
              <label className="form-label">
                <span className="form-label-alt">
                  Please enter your name.
                </span>
              </label>
            </div>

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
                <span className="form-label-alt">
                  Please enter your username.
                </span>
              </label>
            </div>

            <div className="form-field">
              <label className="form-label">Phone</label>
              <input
                placeholder="Type here"
                type="tel"
                id="phone"
                onChange={this.handleChange}
                className="input max-w-full"
              />
              <label className="form-label">
                <span className="form-label-alt">
                  Please enter your phone number.
                </span>
              </label>
            </div>

            <div className="form-field">
              <label className="form-label">Country</label>
              <input
                placeholder="Type here"
                type="text"
                id="country"
                onChange={this.handleChange}
                className="input max-w-full"
              />
              <label className="form-label">
                <span className="form-label-alt">
                  Please enter your country.
                </span>
              </label>
            </div>

            <div className="form-field">
              <label className="form-label">Address</label>
              <input
                placeholder="Type here"
                type="text"
                id="address"
                onChange={this.handleChange}
                className="input max-w-full"
              />
              <label className="form-label">
                <span className="form-label-alt">
                  Please enter your address.
                </span>
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
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
