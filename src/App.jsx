import { useState } from "react";
import MoneyText from "./Components/MoneyText";
import Button from "./Components/Button"
function App() {
  const [currentMoney, setCurrentMoney] = useState(0);

  return (
    <>
      <Button callback={setCurrentMoney} currentMoney={currentMoney} />
      <MoneyText currentMoney={currentMoney} />
    </>
  );
}
export default App;
