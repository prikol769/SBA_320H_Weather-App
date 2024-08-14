import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <>
          <Header />
          <Home />
          <Footer />
        </>
      </GlobalProvider>
    </>
  );
};

export default App;
