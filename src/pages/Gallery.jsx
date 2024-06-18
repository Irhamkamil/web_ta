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
              Find out the best tour gallery
            </h1>
            <p className="text-white text-xl text-justify w-7/12">
              Do you want to see the best tour gallery? You can see it here. Find the best tour packages with the best price and the best service only at {Config.app.name}. Book now and get the best deals for your vacation.
            </p>
          </div>
        </div>
        <div className="container w-10/12 h-48 mx-32 mt-[-100px] relative">
          <Search />
        </div>
        <div className="container mx-auto flex flex-col lg:w-full h-40 items-center justify-center gap-3 mt-16">
          <h2 className="font-bold text-2xl text-black">The Best Tour Gallery</h2>
          <p className="text-black font-medium">
            See our best tour packages and choose your favorite one!
          </p>
        </div>
        <div className="container mx-auto w-full -ml-10 -mt-14">
          <Image images={this.state.images} />
        </div>
      </div>
    )
  }
};

export default Gallery;
