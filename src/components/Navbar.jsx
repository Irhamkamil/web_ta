import { NavLink } from "react-router-dom";
// import logo from "../assets/outrekk.png";
import Config from "../config/app";
import firebaseServices from "../services/Firebase";
import Noty from "noty";
import sessionStorageServices from "../services/SessionStorage";
import NotyServices from "../services/Noty";
import { Component } from "react";
export default class Navbar extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    this.checkLogin()
  }

  checkLogin = () => {
    this.setState({ isLoggedIn: firebaseServices.isLoggedIn() })
  }

  logoutAction = (e) => {
    e.preventDefault();
    var n = new Noty({
      text: 'Are you want to logout?',
      buttons: [
        Noty.button('YES', 'btn m-1', function () {
          sessionStorageServices.remove('user_email', user.email)
          sessionStorageServices.remove('user_uid', user.uid)
          sessionStorageServices.remove('user_fullname', user_details.displayName)
          sessionStorageServices.remove('user_phone', user_details.phone)
          sessionStorageServices.remove('user_photo', FirebaseServices.fileStorageUri(user_details.img))
          sessionStorageServices.remove('user_address', user_details.address)
          sessionStorageServices.remove('user_country', user_details.country)
          sessionStorageServices.remove('user_username', user_details.username)
          NotyServices.success("Successfuly logout")
          n.close();
          window.location.href = '/'
        }),
      
        Noty.button('NO', 'btn m-1', function () {
            n.close();
        })
      ]
    });
    n.show();
  }

  render() {
    const LoginBtn = () => {
      if (this.state.isLoggedIn) {
        return (
          <>
            <NavLink to="/riwayat-pemesanan" className="navbar-item">
                Pemesanan
            </NavLink>
            <form onSubmit={this.logoutAction}>
              <button className="btn btn-warning text-base btn-lg font-bold text-dark">
                Logout
              </button>
            </form>
          </>
        )
      } else {
        return (
          <>
            <NavLink to="/signin" className="navbar-item">
              <button className="btn btn-solid-success text-base btn-lg font-bold text-dark">
                Login
              </button>
            </NavLink>
          </>
        ) 
      }
    }

    return (
      <div className="navbar navbar-sticky navbar-glass px-32">
        <div className="navbar-start">
          {/* <img className="navbar-item w-60 h-16" src={logo}></img> */}
          <NavLink to="/" className=" navbar-item w-60 h-16 z-10">
            <img src={firebaseServices.fileStorageUri(Config.app.logo)} alt="" />
          </NavLink>
        </div>
        <div className="navbar-end gap-x-10 font-bold">
          <NavLink to="/tour" className="navbar-item text-dark">
            Tour
          </NavLink>
          <NavLink to="/gallery" className="navbar-item text-dark">
            Gallery
          </NavLink>
          <NavLink to="/testimoni" className="navbar-item text-dark">
            Testimoni
          </NavLink>
          <LoginBtn/>
        </div>
      </div>
    );
  }
};
