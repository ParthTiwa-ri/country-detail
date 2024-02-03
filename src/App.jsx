import { BrowserRouter, Route, Routes } from "react-router-dom";

import CountryDetail from "./components/Country-detail/CountryDetail";
import Home from "./pages/Home";
import { CountryProvider } from "./Context/CountryContext";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:id" element={<CountryDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
