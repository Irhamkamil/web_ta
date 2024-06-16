import { NavLink } from "react-router-dom";
// import logo from "../assets/outrekk.png";
import Config from "../config/app";
import firebaseServices from "../services/Firebase";

const Navbar = () => {
  return (
    <div className="navbar navbar-sticky navbar-glass px-32">
      <div className="navbar-start">
        {/* <img className="navbar-item w-60 h-16" src={logo}></img> */}
        <NavLink to="/" className=" navbar-item w-60 h-16 z-10">
          <img src={firebaseServices.fileStorageUri(Config.app.logo)} alt="" />
        </NavLink>
      </div>
      <div className="navbar-end gap-x-10 font-bold">
        <NavLink to="/tour" className="navbar-item text-white">
          Tour
        </NavLink>
        <NavLink to="/gallery" className="navbar-item text-white">
          Gallery
        </NavLink>
        <NavLink to="/testimoni" className="navbar-item text-white">
          Testimoni
        </NavLink>
        <NavLink to="/signin" className="navbar-item">
          <button className="btn btn-solid-success text-base btn-lg font-bold text-white">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
