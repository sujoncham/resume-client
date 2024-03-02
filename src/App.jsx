import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
