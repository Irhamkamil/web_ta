import { NavLink } from "react-router-dom";
import BestTourist from "../components/BestTourist";
import Clients from "../components/Clients";
import Image from "../components/Image";
import Product from "../components/Product";
import Search from "../components/Search";
// import logo from "../assets/logo.svg";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Component } from "react";
import ProductsModels from "../models/products";
import GalleryModels from "../models/gallery";
import Config from "../config/app";
import NotyServices from "../services/Noty";
export default class HomePage extends Component {
  state = {
    products: [],
    bestDestination: [],
    gallery: [],
  };

  listProducts = async () => {
    await ProductsModels.lists().then((results) => {
      const products = results.docs.map((doc) => doc.data());
      this.setState({ products: products });
    }).catch((error) => {
      console.log(error)
      NotyServices.error("Failed to get products data")
    })
  };

  bestDestination = async () => {
    await ProductsModels.limit(3).then((results) => {
      const products = results.docs.map((doc) => doc.data());
      this.setState({ bestDestination: products });
    }).catch((error) => {
      console.log(error)
      NotyServices.error("Failed to get products data")
    })
  };

  galleryList = async () => {
    await GalleryModels.limit(3).then((results) => {
      const gallery = results.docs.map((doc) => doc.data());
      this.setState({ gallery: gallery });
    }).catch((error) => {
      console.log(error)
      NotyServices.error("Failed to get gallery data")
    })
  }
  
  componentDidMount() {
    this.listProducts()
    this.bestDestination()
    this.galleryList()
  };

  render() {
    return (
      <div className="w-full h-[6500px] mt-20 bg-white1 relative">
        <div className="w-full h-screen overflow-hidden bg-home bg-center lg:bg-cover bg-no-repeat brightness-75">
          <div className="container mx-36 h-full w-8/12 gap-5 flex flex-col items-start justify-center brightness-200">
            <h1 className="text-white text-4xl">
              Welcome To {Config.app.name}!
            </h1>
            <p className="text-white text-xl text-justify w-7/12">
              Do you want to travel? {Config.app.name} is the right choice for you. 
              We provide various options for tour packages, domestic and international tours.
            </p>
          </div>
        </div>
        <div className="container w-10/12 h-48 mx-32 mt-[-100px] relative">
          <Search />
        </div>
        <div className="container mx-auto flex flex-col lg:w-full h-40 items-center justify-center gap-3 mt-16">
          <h2 className="font-bold text-2xl text-black">The Best Tour Package</h2>
          <p className="text-black font-medium">
            The Best Tour Package Options Ready to Pamper Your Holiday
          </p>
        </div>
        <div className="container w-full -mt-14 mx-auto">
          <Product products={this.state.products} />
        </div>
        <div className="flex h-auto items-center mt-28 relative bg-black">
          <img
            className="flex-1 w-4/12 h-5/6"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
          <div className="flex-auto w-40 p-20 text-justify text-white1">
            <h2 className="font-bold text-2xl pb-3">The Best Tour Package</h2>
            <p className=" font-medium pb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum,
              qui delectus perferendis repudiandae aspernatur earum distinctio
              quasi enim harum velit inventore molestiae magni mollitia tempora
              corporis, rem fugit expedita consequuntur facilis, numquam ab rerum
              nemo? Velit ipsam omnis debitis at unde est aspernatur officiis non
              consectetur animi? Corrupti, itaque.
            </p>
            <h2 className="font-bold text-2xl pb-3">The Best Tour Package</h2>
            <p className="font-medium pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum,
              qui delectus perferendis repudiandae aspernatur earum distinctio
              quasi enim harum velit inventore molestiae magni mollitia tempora
              corporis, rem fugit expedita consequuntur facilis, numquam ab rerum
              nemo? Velit ipsam omnis debitis at unde est aspernatur officiis non
              consectetur animi? Corrupti, itaque.
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col w-full h-40 items-center justify-center gap-3 mt-16">
          <h2 className="font-bold text-2xl text-black">
            Best Tourist Destinations
          </h2>
          <p className="text-black font-medium">
            The Best Tour Package Options Ready to Pamper Your Vacation
          </p>
        </div>
        <div className="container w-full mx-auto -mt-14">
          <Product products={this.state.bestDestination} />
        </div>
        <div className="flex h-auto items-center bg-primer mt-60">
          <div className="flex w-full justify-center gap-4">
            <div className="p-44">
              <h2 className="font-bold text-xl text-white1 pb-3 flex justify-center">
                Testimonial
              </h2>
              <p className="font-medium text-center text-white1 opacity-50">
                They are opinions from those who have
              </p>
              <p className="font-medium text-center text-white1 opacity-50">
                entrusted their vacations with Labiru Tour
              </p>
              <div className="w-96 h-auto p-6 rounded-2xl mt-5 bg-white1">
                <h2 className="font-bold text-xl text-black">
                  &quot;Greet Tour Guide&quot;
                </h2>
                <p className="font-medium text-justify text-black mt-4">
                  This is a really memorable trip for me. Ut enim ad minim veniam,
                  nostrud exercit tation ullamco laboris nisi ut aliquip exea
                  commodo consequat aute irure sint.
                </p>
                <div className="w-auto flex mt-5 items-center ">
                  <div className="avatar">
                    <img
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex-col ml-5">
                    <h1 className="font-extrabold text-xl text-black">
                      Irham Kamil
                    </h1>
                    <h2 className="font-bold text-black">Traveler</h2>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 justify-between">
                <div className="flex gap-3 mt-2 cursor-pointer">
                  <IoIosArrowDropleft size={32} style={{ color: "white" }} />
                  <IoIosArrowDropright size={32} style={{ color: "white" }} />
                </div>
                <button className="btn bg-primer2 font-bold text-white1">
                  Read More &gt;&gt;
                </button>
              </div>
            </div>
            <div className="divider divider-vertical py-36 mx-0 h-auto "></div>
            <div className="p-44">
              <h2 className="font-bold text-xl text-white1 pb-3 flex justify-center">
                Clients
              </h2>
              <p className=" font-medium text-center text-white1 opacity-50">
                Hundreds of companies have entrusted
              </p>
              <p className=" font-medium text-center text-white1 opacity-50">
                their tours and events with Labiru, now its your turn
              </p>
              <Clients />
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col w-full h-40 items-center justify-center gap-3 mt-16">
          <h2 className="font-bold text-2xl text-black">Gallery</h2>
          <p className="text-black font-medium">
            Hundreds of companies have entrusted their tours
          </p>
          <p className="text-black font-medium">
            and events with Labiru, now it&#39;s your turn
          </p>
        </div>
        <div className="container w-full -ml-10 mt-14">
          <Image images={this.state.gallery} />
        </div>
        <div className="container flex flex-col w-full h-40 items-center justify-center gap-3 mt-40">
          <NavLink
            to="/gallery"
            className="btn bg-secondary btn-lg font-bold text-white1 h-16 rounded-2xl"
          >
            Another Photo <FaArrowRightLong style={{ margin: 10 }} />
          </NavLink>
        </div>
      </div>
    );
  }
};
