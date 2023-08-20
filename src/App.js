
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Twelveth from "./components/twelveth/twelveth"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/twelveth" element={<Twelveth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
