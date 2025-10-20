import ListGroup from "./components/ListGroup";

function App() {
  let items = ["1", "3", "2", "7", "4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="List of numbers"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
