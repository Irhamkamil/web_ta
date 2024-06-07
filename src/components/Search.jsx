const Search = () => {
  return (
    <div className=" border rounded-2xl w-full h-48 bg-white1 shadow-2xl absolute">
      <div className="w-full h-full pl-4">
        <h2 className="px-14 py-10 h-24 font-bold text-2xl text-black">
          Find Your Package
        </h2>
        <div className="px-14 flex gap-5">
          <select className="select bg-white1 outline-gray-500 ">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <select className="select bg-white1 outline-gray-500 ">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <select
            className="select bg-white1 outline-gray-500 "
            label="Kategori wisata"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <button className="btn btn-md w-40 h-10 bg-secondary font-bold text-white1 relative ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
