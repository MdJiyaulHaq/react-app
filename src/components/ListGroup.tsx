import { useState } from "react";

function ListGroup() {
  let items = ["1", "3", "2", "7", "4"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3>List of numbers</h3>
      {items.length === 0 && <p>No items in the list</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
