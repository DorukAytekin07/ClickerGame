import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoneyText from "./Components/MoneyText";
import Button from "./Components/Button"
import Sidebar from "./Components/SideBar";
function App() {
  const [currentMoney, setCurrentMoney] = useState(0);

  return (
    <>
      <div className="top-part">
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/store" element={<App />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>

        <MoneyText currentMoney={currentMoney} />
      </div>
      <Button callback={setCurrentMoney} currentMoney={currentMoney} />
    </>
  );
}
export default App;
