import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CountryDetail from "./components/Country-detail/CountryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries/:id" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
