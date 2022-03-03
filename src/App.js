import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import BriefSection from "./components/BriefSection";
import FormSection from "./components/FormSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutPage from "./components/AboutPage";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import ProductFilter from "./components/ProductFilter";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="mainPage">
        <Switch>
          <Route exact path="/">
            <IntroSection />
            <FeaturedProducts />
            <BriefSection />
            <FormSection />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/products">
            <ProductFilter />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
