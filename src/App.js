import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import SpecialOffers from "./Components/SpecialOffers";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/menu" component={Menu} />
            <Route path="/cart" component={Cart} />
            <Route path="/">
              <Home />
              <SpecialOffers />
              <About />
              <Work />
              <Testimonial />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
