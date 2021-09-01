const Error = ({ setIsError }) => {
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
};

export default Error;
