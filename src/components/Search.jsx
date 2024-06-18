import componentDidMount from "react";
import { Component } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ProductsModels from "../models/products";
export default class Search extends Component {
  state = {
    titles: [],
    search_params: null,
    redirectAfterSubmit: false
  }

  componentDidMount() {
    this.setDefaultValue()
    this.listProducts() 
  }

  setDefaultValue = () => {
    // search params from url
    const urlParams = new URLSearchParams(window.location.search);

    // get q from url
    const query = urlParams.get("q");

    if (['', null, undefined].includes(query) === false) {
      this.setState({ search_params: query })
    }
  }

  listProducts = async () => {
    await ProductsModels.lists().then((results) => {
      const products = results.docs.map((doc) => doc.data());
      const titles = products.map((product) => product.name)
      this.setState({ titles: titles });
    }).catch((error) => {
      console.log(error)
      NotyServices.error("Failed to get products data")
    })
  };

  searchHandle = (e) => {
    window.location.href = "/tour?q=" + this.state.search_params
  }

  render() {
    return (
      <div className=" border rounded-2xl w-full h-48 bg-white1 shadow-2xl absolute">
        <div className="w-full h-full pl-4">
          <h2 className="px-14 py-10 h-24 font-bold text-2xl text-black">
            Find Your Package
          </h2>
          <form className="px-14 flex justify-between gap-5" onSubmit={this.searchHandle}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                disableClearable
                fullWidth
                size="small"
                value={this.state.search_params}
                onChange={(event, value) => {
                  this.setState({ search_params: value })
                }}
                options={this.state.titles}
                renderInput={(params) => <TextField {...params} label="Find Your Destination" />}
              />

              <button className="btn btn-md w-40 h-10 bg-secondary font-bold text-white1 relative ">
                Search
              </button>
            </form>
        </div>
      </div>
    );
  }
};
