function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Cart is empty. You need to start packing!</em>
      </p>
    );
  }
  const numOfItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percent = Math.round((numPacked / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You have packed everything. Good Job👏🏻"
          : `You have packed ${numOfItems} items, and have already packed ${numPacked}(${percent}%)`}
      </em>
    </footer>
  );
}
export default Stats;
