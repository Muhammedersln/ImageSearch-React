import React, { useContext, useState } from "react";
import { ImageContext } from "../App";
const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData ,setSearchImage} =useContext(ImageContext)
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    setSearchValue("");
    setSearchImage(searchValue);

  };
  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-lg w-full indent-1 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Herhangi bir şey ara..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >
        ARA
      </button>
    </div>
  );
};
export default SearchField;
