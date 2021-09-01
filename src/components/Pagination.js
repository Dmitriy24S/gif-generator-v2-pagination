function Pagination({
  pageNumber,
  currentPage,
  pageIndex,
  setCurrentPage,
  fetchGifs,
  offsetArr,
}) {
  let classes = "page-item ";
  if (pageNumber === currentPage) {
    classes += "active";
  }
  return (
    <li
      // key={pageIndex}
      className={classes}
      onClick={() => {
        setCurrentPage(pageNumber);
        fetchGifs(offsetArr[pageIndex]);
      }}
    >
      <a href="#" className="page-link">
        {pageNumber}
      </a>
    </li>
  );
}

export default Pagination;
