import ListGroup from "./components/ListGroup";

function App() {
  let items = ["1", "3", "2", "7", "4"];
  return (
    <div>
      <ListGroup items={items} heading="List of numbers" />
    </div>
  );
}

export default App;
