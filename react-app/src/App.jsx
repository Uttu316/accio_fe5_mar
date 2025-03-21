import "./App.css";
import Counter from "./components/counter";
import Footer from "./components/footer";
import Header from "./components/header";
import Products from "./components/products";

const App = () => {
  return (
    <div>
      <Header name={"Nilesh"} />
      <Counter />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
