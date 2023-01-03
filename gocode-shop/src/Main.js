import "./App.css";
import { arr } from "./data/data";
import { useClock } from "./useClock";
import MyContext from "./MyContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import YesSir from "./pages/YesSir";
import Terms from "./pages/Terms";
import AboutPage2 from "./pages/AboutPage2";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header/Header";
import SingleProductView from "./pages/SingleProductView";
import Auth from "./pages/Auth";

function Main() {
  const [products, setProducts] = useState([]);
  const isAuthenticated = false
  const getAllProducts = async () => {
    try {
      const response = await fetch("productUrl");
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const clock = useClock();
  return (
    <BrowserRouter>
      <MyContext.Provider value={{ products, setProducts, data: arr }}>
        <Header>this is my header</Header>
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Auth>sign in</Auth>} />
            <Route path="signup" element={<Auth>signup</Auth>} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="products/:productId" element={<SingleProductView />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about/about2" element={<AboutPage2 />} />
            <Route path="termsOfAgreement" element={<Terms />} />
            <Route path="yesSir" element={<YesSir />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
        <footer>this is my footer</footer>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default Main;
