import "./App.css";
import Counters from "./components/Counters";
import Footer from "./components/footer";
import Header from "./components/header";
import Products from "./components/products";

const App = () => {
  return (
    <div>
      <Header name={"Nilesh"} />
      <Counters />
      {/* <Products /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
