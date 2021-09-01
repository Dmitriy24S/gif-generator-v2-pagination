import React, { useState } from "react";
import Error from "./components/Error";
import Item from "./components/Item";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

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

  if (isError) <Error setIsError={setIsError} />;

  return (
    <div className="App">
      <h1 className="header">Gif Generator v2</h1>
      <SearchBar
        handleSubmit={handleSubmit}
        value={value}
        handleChange={handleChange}
      />
      <nav>
        <ul>
          {pageNumbers.map((pageNumber, pageIndex) => (
            <Pagination
              key={pageIndex}
              pageNumber={pageNumber}
              currentPage={currentPage}
              pageIndex={pageIndex}
              setCurrentPage={setCurrentPage}
              fetchGifs={fetchGifs}
              offsetArr={offsetArr}
            />
          ))}
        </ul>
      </nav>
      {isLoading && <Loader />}
      <div className="results">
        {dataArray.map((gif) => (
          <Item key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
}

export default App;
