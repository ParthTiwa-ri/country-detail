import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
// import Search from "./components/Search/Search";

function HomePage() {
  return (
    <div className="app">
      <Header />
      {/* <Search /> */}
      <Cards />
    </div>
  );
}

export default HomePage;
