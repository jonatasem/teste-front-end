import "./styles/App.scss";

//components
import Header from "./components/header";
import Footer from "./components/footer";

//page
import Home from "./pages/home";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
