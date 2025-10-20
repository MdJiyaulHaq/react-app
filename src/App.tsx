import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const onClick: () => void = () => {
    console.log("Button clicked");
    setAlertVisible(true);
  };
  const onClose: () => void = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={onClose}>Success Alert</Alert>}
      <Buttons color="secondary" onClick={onClick}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;
