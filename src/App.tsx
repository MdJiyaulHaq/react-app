import Buttons from "./components/Buttons";

const onClick: () => void = () => {
  console.log("Button clicked");
};

function App() {
  return (
    <div>
      <Buttons color="secondary" onClick={onClick}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;
