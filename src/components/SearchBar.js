function SearchBar({ handleSubmit, value, handleChange }) {
  return (
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
  );
}

export default SearchBar;
