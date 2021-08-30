import React, { useState, useEffect } from "react";
import { BiLoaderAlt } from "react-icons/bi";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [value, setvalue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const GIPHY_API =
    "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";

  const fetchGifs = async () => {
    setIsLoading(false);
    setIsError(false);
    try {
      const response = await fetch(GIPHY_API + value);
      if (response.ok) {
        const data = await response.json();
        setDataArray(data.data);
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGifs();
  };

  if (isError) {
    return (
      <div className="error">
        Unable to get Gifs, please try again later
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => {
            setIsError(false);
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search gifs"
        />
        <button>Search</button>
      </form>
      {isLoading && (
        <div className="loader">
          <BiLoaderAlt size={100} />
        </div>
      )}
      <div className="results">
        {dataArray.map((gif) => {
          return (
            <div className="item" key={gif.id}>
              <img src={gif.images.fixed_height.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
