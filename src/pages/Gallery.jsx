import { Component } from "react";
import Search from "../components/Search";
import Config from "../config/app";
import Image from "../components/Image";
import GalleryModel from "../models/gallery";
import NotyServices from "../services/Noty"
class Gallery extends Component {
  state = {
    images: []
  }

  listImages() {
    GalleryModel.lists().then((results) => {
      const gallery = results.docs.map((doc) => doc.data());
      this.setState({ images: gallery });
    }).catch((error) => {
      console.log(error);
      NotyServices.error("Failed to get images data")
    })
  }

  componentDidMount() {
    this.listImages()
  }

  render() {
    return (
      <div className="w-full h-[6500px] mt-20 bg-white1 relative">
        <div className="w-full h-screen overflow-hidden bg-home bg-center lg:bg-cover bg-no-repeat brightness-75">
          <div className="container mx-36 h-full w-8/12 gap-5 flex flex-col items-start justify-center brightness-200">
            <h1 className="text-white text-4xl">
              Domestic & International Tour Packages
            </h1>
            <p className="text-white text-xl text-justify w-7/12">
              Now, holidays are becoming EASY, FAST, and FUN. {Config.app.name} provides
              various options for tour packages, domestic and international tours
              to various favorite destinations. Choose your package and experience
              the convenience!
            </p>
          </div>
        </div>
        <div className="container w-10/12 h-48 mx-32 mt-[-100px] relative">
          <Search />
        </div>
        <div className="container flex flex-col lg:w-full h-40 items-center justify-center gap-3 mt-16">
          <h2 className="font-bold text-2xl text-black">The Best Tour Gallery</h2>
          <p className="text-black font-medium">
            See our best tour packages and choose your favorite one!
          </p>
        </div>
        <div className="container w-full -mt-14">
          <Image images={this.state.images} />
        </div>
      </div>
    )
  }
};

export default Gallery;
