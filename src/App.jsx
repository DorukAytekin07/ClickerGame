import { useState } from "react";
import MoneyText from "./Components/MoneyText";
function App() {
  const [currentMoney, setCurrentMoney] = useState(0);

  return (
    <>
      <div className="center">
        <button className="money-button" onClick={() => {
          setCurrentMoney(currentMoney + 1)
          console.log(currentMoney)

        }}>Click</button>
      </div >
      <MoneyText currentMoney={currentMoney} />
    </>
  );
}
export default App;
