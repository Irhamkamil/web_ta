import { Component } from "react";
import ProductsModels from "../models/products";
import Search from "../components/Search";
import Config from "../config/app";
import Product from "../components/Product";
import NotyServices from "../services/Noty";
import { useEffect } from "react";
export default class TourPage extends Component {
  state = {
    products: [],
  };

  listProducts = async () => {
    // search params from url
    const urlParams = new URLSearchParams(window.location.search);

    // get q from url
    const query = urlParams.get("q");

    // if query is not empty, get products by name
    if (['', null, undefined].includes(query) === false) {
      await ProductsModels.findBy("name", query).then((results) => {
        const products = results.docs.map((doc) => doc.data());
        this.setState({ products: products });
      }).catch((error) => {
        console.log(error)
        NotyServices.error("Failed to get products data")
      })

    // if query is empty, get products directly
    } else {
      await ProductsModels.lists().then((results) => {
        const products = results.docs.map((doc) => doc.data());
        this.setState({ products: products });
      }).catch((error) => {
        console.log(error)
        NotyServices.error("Failed to get products data")
      })
    }
  };

  componentDidMount() {
    this.listProducts()
  };

  componentDidUpdate() {
    this.listProducts()
  };

  render() {
    return (
      <div className="w-full h-[6500px] mt-20 bg-white1 relative">
        <div className="w-full h-screen overflow-hidden bg-home bg-center lg:bg-cover bg-no-repeat brightness-75">
          <div className="container mx-36 h-full w-8/12 gap-5 flex flex-col items-start justify-center brightness-200">
            <h1 className="text-white text-4xl">
              Domestic & International Tour Packages
            </h1>
            <p className="text-white text-xl text-justify w-7/12">
              Find the best tour packages with the best price and the best service only at {Config.app.name}. Book now and get the best deals for your vacation.
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
        <div className="container mx-auto w-full -mt-14">
          <Product products={this.state.products} />
        </div>
      </div>
    )
  }
};
