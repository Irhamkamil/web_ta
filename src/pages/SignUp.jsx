import { Component } from "react";
import { NavLink } from "react-router-dom";
import FirebaseServices from '../services/Firebase'
import NotyServices from "../services/Noty";
import sessionStorageServices from "../services/SessionStorage";
import { Navigate } from "react-router-dom";
import UserModel from "../models/user";
import Config from "../config/app";
export class SignUp extends Component {
  state = {
    // diambil dari id pada input
    email: "",
    password: "",
    address: "",
    country: "",
    phone: "",
    displayName: "",
    img: "",
    username: ""
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
      const user_profile_image_filename = Math.floor(Math.random() * 1000000).toString() + '.jpg'
      const user_profile_image_filepath = Config.storage.user_profile + `/${state.username}/${user_profile_image_filename}`

      UserModel.isUserNameExist(state.username).then((isExist) => {
        if (isExist) {
          NotyServices.error('Username already exist!')
          return false
        }
  
        // save user img
        FirebaseServices.uploadFileFromBase64(state.img, user_profile_image_filepath).then((snapshot) => {

          // Save user to firestore
          UserModel.save(state.email, state.password, state.address, state.country, state.phone, state.displayName, state.username, user_profile_image_filepath).then((results) => {
            // Save to session
            sessionStorageServices.set('user_email', user.email)
            sessionStorageServices.set('user_uid', user.uid)
            sessionStorageServices.set('user_fullname', state.displayName)
            sessionStorageServices.set('user_phone', state.phone)

            // Show success message
            NotyServices.success('Hi, ' + user.email + '! You have successfully signed up.')

            // Redirect to home
            window.location.href = '/'
          }).catch((error) => {
            NotyServices.error(error.message)
          })

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

  handleFileUpload(file) {
    // convert file to base64 string
    const reader = new FileReader();

    reader.onload = (e) => {
      this.setState({ img: e.target.result });
    };

    reader.readAsDataURL(file);

    // set to state img
    this.setState({ img: file });
  }

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

            <div className="form-field">
              <label className="form-label">Photo</label>
              <div className="form-control">
                <input
                  placeholder="Type here"
                  type="file"
                  accept=".jpg,.png,.jpeg"
                  id="img"
                  onChange={(e) => this.handleFileUpload(e.target.files[0])}
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
