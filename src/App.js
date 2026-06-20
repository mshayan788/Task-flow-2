import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;