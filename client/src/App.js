import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
