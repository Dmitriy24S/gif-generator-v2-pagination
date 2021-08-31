import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [value, setvalue] = useState("forest");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [dataFetchLimit, setDataFetchLimit] = useState(0);
  const pageNumbers = [];
  const offsetArr = [0];

  for (let i = 1; i <= Math.ceil(dataFetchLimit / itemsPerPage); i++) {
    pageNumbers.push(i);
    offsetArr.push(itemsPerPage * i);
  }

  const fetchGifs = async (offsetNumber) => {
    setIsLoading(true);
    setIsError(false);
    try {
      // const response = await fetch(GIPHY_API + value);
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=tAEFUgagRjRNkU24orQdFB8EHMcNTUSe&limit=${itemsPerPage}&offset=${offsetNumber}&q=${value}`
      );
      if (response.ok) {
        // console.log(response);
        console.log({ offsetNumber });
        const data = await response.json();
        setDataArray(data.data);
        setDataFetchLimit(100);
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
    fetchGifs(0);
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
      <h1 className="header">Gif Generator v2</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search gifs"
          required
          pattern="\S+.*"
        />
        <button>Search</button>
      </form>
      <nav>
        <ul>
          {pageNumbers.map((pageNumber, pageIndex) => {
            let classes = "page-item ";
            if (pageNumber === currentPage) {
              classes += "active";
            }
            return (
              <li
                key={pageIndex}
                className={classes}
                onClick={() => {
                  setCurrentPage(pageNumber);
                  fetchGifs(offsetArr[pageIndex]);
                }}
              >
                <a href="!#" className="page-link">
                  {pageNumber}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
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
