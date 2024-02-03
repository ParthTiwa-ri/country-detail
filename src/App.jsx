import { BrowserRouter, Route, Routes } from "react-router-dom";

import CountryDetail from "./components/Country-detail/CountryDetail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:id" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
