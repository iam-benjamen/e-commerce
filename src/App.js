import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import IntroSection from "./IntroSection.js";
import BriefSection from "./BriefSection.js";
import FormSection from "./FormSection.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedProject from "./FeaturedProducts.js";

import AboutPage from "./AboutPage";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="mainPage">
        <Switch>
          <Route exact path="/">
            <IntroSection />
            <FeaturedProject />
            <BriefSection />
            <FormSection />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
