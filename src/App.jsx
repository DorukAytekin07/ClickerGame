import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoneyText from "./Components/MoneyText";
import Button from "./Components/Button"
import Sidebar from "./Components/SideBar";
import Store from "./Components/Store";
function App() {
  const [currentMoney, setCurrentMoney] = useState(0);
  const [incrementScale,setIncrementScale] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(1);
  return (
    <>
      <div className="top-part">
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/store" element={<Store upgradeCost={upgradeCost} currentMoney={currentMoney} incrementScale={incrementScale} callback={setCurrentMoney} callback2={setIncrementScale} callback3={setUpgradeCost}/>} />
              <Route path="/home" element={<App/>} />
            </Routes>
          </Sidebar>
        </BrowserRouter>

        <MoneyText currentMoney={currentMoney} />
      </div>
      <Button callback={setCurrentMoney} currentMoney={currentMoney} incrementScale={incrementScale} />
    </>
  );
}
export default App;
