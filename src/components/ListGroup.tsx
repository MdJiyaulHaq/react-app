function ListGroup() {
  let items = ["1", "3", "2", "7", "4"];
  //   items = [];

  return (
    <>
      <h3>List of numbers</h3>
      {items.length === 0 && <p>No items in the list</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li className="list-group-item" key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
