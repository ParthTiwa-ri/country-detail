import { BrowserRouter, Route, Routes } from "react-router-dom";

import CountryDetail from "./components/Country-detail/CountryDetail";
import Home from "./pages/Home";
import { CountryProvider } from "./Context/CountryContext";
import PageNotFound from "./pages/PageNotFound";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <CountryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries/:id" element={<CountryDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CountryProvider>
    </ThemeProvider>
  );
}

export default App;
