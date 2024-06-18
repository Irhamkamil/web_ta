import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ProductsModels from '../models/products';
import { useNavigate, useLocation } from 'react-router-dom';

const Search = () => {
  const [titles, setTitles] = useState([]);
  const [searchParams, setSearchParams] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get('q');

    if (query && searchParams !== query) {
      setSearchParams(query);
    }

    listProducts();
  }, []);

  const listProducts = async () => {
    try {
      const results = await ProductsModels.lists();
      const products = results.docs.map((doc) => doc.data());
      const titles = products.map((product) => product.name);
      setTitles(titles);
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandle = (e) => {
    e.preventDefault();
    const SEARCH_URL = '/tour?q=' + searchParams;
    navigate(SEARCH_URL);
  };

  return (
    <div className="border rounded-2xl w-full h-48 bg-white1 shadow-2xl absolute">
      <div className="w-full h-full pl-4">
        <h2 className="px-14 py-10 h-24 font-bold text-2xl text-black">
          Find Your Package
        </h2>
        <form className="px-14 flex justify-between gap-5" onSubmit={searchHandle}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            disableClearable
            fullWidth
            size="small"
            value={searchParams}
            onChange={(event, value) => {
              setSearchParams(value);
            }}
            options={titles}
            renderInput={(params) => (
              <TextField {...params} label="Find Your Destination" />
            )}
          />
          <button className="btn btn-md w-40 h-10 bg-secondary font-bold text-white1 relative">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;