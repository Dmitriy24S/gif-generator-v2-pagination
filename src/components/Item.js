function Item({ gif }) {
  return (
    <div
      className="item"
      // key={gif.id}
    >
      <img src={gif.images.fixed_height.url} alt="" />
    </div>
  );
}

export default Item;
